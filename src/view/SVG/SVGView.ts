import type { ViewLike } from "../viewlike";
import type { coordinates3D } from "../../model/galaxy.js";
import { HSV2RGB, sectoHSV } from "../utils/utils";
import { jaroWinkler } from "jaro-winkler-typescript";
import * as d3 from "d3";
import type { Writable } from "svelte/store";
import type { Transform } from "../../utils/svelte-store"

export class SVGView implements ViewLike {
    private readonly _rootHTMLElement: HTMLElement;
    private _SVG: d3.Selection<SVGSVGElement, undefined, null, undefined>;
    private _G: d3.Selection<d3.BaseType, undefined, null, undefined>;
    private _systemData: [string, coordinates3D, number][];
    private _connections: [coordinates3D, coordinates3D][];
    private _translationVec: number[];
    private _zoom: d3.ZoomBehavior<Element, unknown>;
    private _systemNames: string[] = [];
    private _boundingBox: {
        corner1: [number, number, number],
        corner2: [number, number, number],
        center: [number, number, number],
    };
    private readonly _viewboxDimensions = [100, 100];
    private _transformListener: Writable<Transform>;

    private get rootHTMLElement() { return this._rootHTMLElement; }
    private get SVG() { return this._SVG; }
    private get G() { return this._G; }
    private get systemData() { return this._systemData; }
    private get connections() { return this._connections; }
    private get translationVec() { return this._translationVec; }
    private get zoom() { return this._zoom; }
    private get names() { return this._systemNames; }
    private get boundingBox() { return this._boundingBox; }
    private get viewboxDimensions() { return this._viewboxDimensions; }
    private get transformListener() { return this._transformListener; }


    constructor(rootHTMLElement: HTMLElement) {
        this._rootHTMLElement = rootHTMLElement;
    }

    public dispose() { }

    public destroy() {
        const SVGHTMLElement =
            this.rootHTMLElement.getElementsByTagName(this.SVG.node().tagName)[0];
        this.rootHTMLElement.removeChild(SVGHTMLElement);
    }

    public addTransformListener(listener) {
        this._transformListener = listener;
    }

    public update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][],
        transform?: string,
        isInteractive: boolean = false
    ): void {
        this._systemData = systemData.map((data): [string, coordinates3D, number] => {
            const name = new String(data[0]).toString();
            const coords: coordinates3D = {
                x: data[1].x,
                y: data[1].y,
                z: data[1].z,
            }
            const security = data[2];
            return [name, coords, security];
        });
        this._connections = connections.map((data): [coordinates3D, coordinates3D] => {
            const start = {
                x: data[0].x,
                y: data[0].y,
                z: data[0].z,
            };
            const end = {
                x: data[1].x,
                y: data[1].y,
                z: data[1].z,
            };
            return [start, end];
        });
        this._systemNames = systemData.map(x => new String(x[0]).toString());
        this.recreate(this.systemData, this.connections, transform, isInteractive);
    }

    private recreate(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][],
        transform?: string,
        isInteractive: boolean = false
    ): void {
        this._systemData = systemData;
        this._connections = connections;
        this._systemNames = systemData.map(x => x[0]);

        // TODO
        // 1) Este método tem de ser configurável com merdas tipo
        //  - se se quer pan&zoom
        //  - se vai ser passivo no q toca a listeners
        //  - se vai alterar o url 
        // 2) Se vai ser maxi ou mini mapa
        const viewboxDimensions = this.viewboxDimensions;
        const systemCoordinates = systemData
            .map(x => {
                x[1] = this.YFlipper(x[1]);
                return x;
            })
            .map(x => {
                return {
                    systemName: x[0],
                    ...x[1],
                    ...HSV2RGB(sectoHSV(x[2])),
                };
            });
        const connectionCoordinates = connections
            .map(c => {
                c[0] = this.YFlipper(c[0]);
                c[1] = this.YFlipper(c[1]);
                return c;
            })
            .map(c => {
                const start = c[0];
                const end = c[1];
                return [[start.x, start.y, start.z], [end.x, end.y, end.z]];
            });


        const boundingBox = this.computeBoundingBox(systemCoordinates.map(
            s => {
                return [s.x, s.y, s.z];
            }
        ));
        this._boundingBox = boundingBox;
        const center = boundingBox.center;
        const translationVec = [(viewboxDimensions[0] / 2) - center[0], (viewboxDimensions[1] / 2) - center[1]];
        this._translationVec = translationVec;
        const scaleExtent: [number, number] = [0.5, 8];

        const svg = d3.create("svg");
        const G = svg.append("svg:g");
        this._SVG = svg;
        this._G = G;

        const transformParams = this.transformParser(transform) || { translate: [center[0], center[1]], scale: 1 };
        const d3transform = d3.zoomIdentity.translate(transformParams.translate[0], transformParams.translate[1]).scale(transformParams.scale);
        const zoom = d3.zoom()
            .scaleExtent(scaleExtent)
            .translateExtent([[boundingBox.corner1[0] * 1.20, boundingBox.corner1[1] * 1.20], [boundingBox.corner2[0] * 1.20, boundingBox.corner2[1] * 1.20]])
            .on("zoom", this.zoomed)
            .on("end", this.zoomEnd);
        this._zoom = zoom;

        svg
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("id", "SVGSubway")
            .attr("preserveAspectRatio", "xMidYMid meet")
            ;

        if (isInteractive) {
            svg
                .attr("viewBox", [Math.round(center[0]), Math.round(center[1]), ...viewboxDimensions])
                .call(zoom)
                .call(zoom.transform, d3transform);
        }
        else {
            const c1 = boundingBox.corner1;
            const c2 = boundingBox.corner2;
            const h = Math.sqrt((c2[0] - c1[0]) ** 2);
            const v = Math.sqrt((c2[1] - c1[1]) ** 2);
            const longestSide = Math.max(h, v);
            svg.attr("viewBox", [Math.round(c1[0]), Math.round(c1[1]), Math.round(longestSide), Math.round(longestSide)]);
        }

        // Painter's algorithm
        G
            .selectAll("line")
            .data(connectionCoordinates)
            .enter()
            .append("line")
            .attr("class", "svg-line")
            .attr("x1", d => String(d[0][0]))
            .attr("y1", d => String(d[0][1]))
            .attr("x2", d => String(d[1][0]))
            .attr("y2", d => String(d[1][1]))
            ;

        if (isInteractive) {
            G
                .selectAll("text")
                .data(systemCoordinates)
                .enter()
                .append("text")
                .attr("class", "svg-text")
                .attr("x", d => String(d.x))
                .attr("y", d => String(d.y))
                .attr("dominant-baseline", "middle")
                .text(d => d.systemName)
                .attr("id", d => `system-${d.systemName}`)
                ;
        } else {
            G
                .selectAll("circle")
                .data(systemCoordinates)
                .enter()
                .append("circle")
                .attr("class", "svg-circle")
                .attr("cx", d => String(d.x))
                .attr("cy", d => String(d.y))
                .attr("r", 3)
                .attr("id", d => `system-${d.systemName}`)
                ;
        }


        const previousSVG =
            this.rootHTMLElement.getElementsByTagName(svg.node().tagName)[0];
        if (previousSVG === undefined) {
            this.rootHTMLElement.appendChild(svg.node());
        } else {
            this.rootHTMLElement.replaceChild(svg.node(), previousSVG);
        }


        if (isInteractive) {
            // Bounding boxes don't exist before DOM interactions
            // So we must put this after they've happened
            G
                .selectAll("text")
                .each(function (data: any, index) {
                    const dimensions = (this as any).getBBox();
                    G.insert("rect", "text")
                        .attr("class", "svg-node")
                        .attr("x", dimensions.x)
                        .attr("y", dimensions.y)
                        .attr("rx", 1)
                        .attr("ry", 1)
                        .attr("width", dimensions.width * 1.05)
                        .attr("height", dimensions.height * 1.05)
                        .style("stroke", () => `rgb(${data.r},${data.g},${data.b})`)
                })
                ;
        }
    }

    public centerOnNode(searchStr: string) {
        const svg = this.SVG;
        const zoom = this.zoom;
        const boundingBox = this.boundingBox;
        const matches = this.names.map(name => {
            const d: number = jaroWinkler(name.toLowerCase(), searchStr.toLowerCase());
            return { name, distance: d };
        }).sort((x, y) => y.distance - x.distance);
        const closestMatch = matches[0];
        const selection = svg.select(`#system-${closestMatch.name}`);
        const viewboxDimensions = this.viewboxDimensions;
        const newScale = 2;
        // This janky mess is required because the translation at scales other than 1 is relative to 
        // the viewbox's coordinate system rather than the global coordinate system.
        // This means that the node's coordinates are fine, but displacement of the viewbox has 
        // to be relative to the viewbox's dimensions.
        // In the end we multiply the whole thing by the desired scale factor. 
        // Surprisingly it works.
        const translateX = (-parseFloat(selection.attr("x")) + (viewboxDimensions[0] / 2) / newScale + boundingBox.center[0] / newScale) * newScale;
        const translateY = (-parseFloat(selection.attr("y")) + (viewboxDimensions[1] / 2) / newScale + boundingBox.center[1] / newScale) * newScale;
        const newZoom = d3.zoomIdentity.translate(translateX, translateY).scale(newScale);
        svg.call(zoom.transform, newZoom);
    }

    public minimapRect(t: Transform) {
        const center = this.boundingBox.center;
        const viewboxDimensions = this.viewboxDimensions;
        const transform = d3.zoomIdentity.translate(t.x, t.y).scale(t.k).invert([center[0], center[1]]);
        const widthScreen = this.rootHTMLElement.clientWidth;
        const heightScreen = this.rootHTMLElement.clientHeight;
        const squareScreen = Math.min(widthScreen, heightScreen);
        const ScreenToUserRatio = squareScreen / this.viewboxDimensions[0];
        const x = transform[0] + viewboxDimensions[0] / 2 / t.k;
        const y = transform[1] + viewboxDimensions[1] / 2 / t.k;
        // TODO: Hardcoded minimum aspect ratio only works because
        // the SVG's hardcoded aspect ratio is 1:1
        const widthUser = (squareScreen * Math.max(t.aspectRatio, 1)) / ScreenToUserRatio / t.k;
        const heightUser = squareScreen / ScreenToUserRatio / t.k;

        // Fucking stupid top left corner idiocy
        const actualFuckingSquareCenterUserX = x - (squareScreen / ScreenToUserRatio / 2) / t.k;
        const actualFuckingSquareCenterUserY = y - (squareScreen / ScreenToUserRatio / 2) / t.k;
        this.G.select("#svg-minimap-rect").remove();
        this.G
            .append("rect")
            .attr("id", "svg-minimap-rect")
            .attr("width", widthUser)
            .attr("height", heightUser)
            .attr('stroke', 'red')
            .attr('stroke-width', 2)
            .attr('fill', 'none')
            .attr("x", actualFuckingSquareCenterUserX)
            .attr("y", actualFuckingSquareCenterUserY)
            ;
    }

    private YFlipper = (coordinates: coordinates3D): coordinates3D => {
        return {
            x: coordinates.x,
            y: -coordinates.y,
            z: coordinates.z,
        }
    }

    private computeBoundingBox = (coordinates: number[][]): {
        corner1: [number, number, number],
        corner2: [number, number, number],
        center: [number, number, number]
    } => {
        return coordinates.reduce((acc, val) => {
            const x = val[0];
            const y = val[1];
            const z = val[2];
            const corner1 = acc.corner1;
            const corner2 = acc.corner2;
            if (x <= corner1[0]) corner1[0] = x;
            if (y <= corner1[1]) corner1[1] = y;
            if (z <= corner1[2]) corner1[2] = z;
            if (x >= corner2[0]) corner2[0] = x;
            if (y >= corner2[1]) corner2[1] = y;
            if (z >= corner2[2]) corner2[2] = z;
            acc.center = [(corner2[0] + corner1[0]) / 2, (corner2[1] + corner1[1]) / 2, (corner2[2] + corner1[2]) / 2];
            return acc;
        }, {
            corner1: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            corner2: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
            center: [0, 0, 0]
        });
    }

    private zoomed = (event) => {
        const { transform } = event;
        const screenWidth = this.rootHTMLElement.clientWidth;
        const screenHeight = this.rootHTMLElement.clientHeight;
        const aspectRatio = screenWidth / screenHeight;
        this.G.attr("transform", transform);
        if (this.transformListener !== undefined) this.transformListener.set({ ...transform, aspectRatio });
    }

    private zoomEnd = (event) => {
        this.zoomed(event);
        const { transform } = event;
        const serialized = btoa(JSON.stringify(transform));
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set("args", serialized);
        history.replaceState({}, '', currentURL.toString());
    }

    private transformParser = (transform: string): { translate: number[], scale: number } => {
        try {
            const decoded = JSON.parse(atob(transform));
            return {
                translate: [decoded.x, decoded.y],
                scale: decoded.k
            };
        }
        catch {
            return undefined;
        }
    }

    public onWindowResize() { }
}