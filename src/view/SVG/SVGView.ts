import type { ViewLike } from "../viewlike";
import type { coordinates3D } from "../../model/galaxy.js";
import { RGBtofloat, HSV2RGB, sectoHSV } from "../utils/utils";
import * as d3 from "d3";

export class SVGView implements ViewLike {
    private readonly _rootHTMLElement: HTMLElement;
    private _SVG: d3.Selection<SVGSVGElement, undefined, null, undefined>;
    private _G: d3.Selection<d3.BaseType, undefined, null, undefined>;
    private _systemData: [string, coordinates3D, number][];
    private _connections: [coordinates3D, coordinates3D][];
    private _translationVec: number[];


    private get rootHTMLElement() { return this._rootHTMLElement; }
    private get SVG() { return this._SVG; }
    private get G() { return this._G; }
    private get systemData() { return this._systemData; }
    private get connections() { return this._connections; }
    private get translationVec() { return this._translationVec; }

    constructor(rootHTMLElement: HTMLElement) {
        this._rootHTMLElement = rootHTMLElement;
    }

    public dispose() { }

    public destroy() {
        const SVGHTMLElement =
            this.rootHTMLElement.getElementsByTagName(this.SVG.node().tagName)[0];
        this.rootHTMLElement.removeChild(SVGHTMLElement);
    }

    public update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][],
        transform?: string
    ) {
        this._systemData = systemData;
        this._connections = connections;

        const rect = this.rootHTMLElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const viewboxDimensions = [100, 100];
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


        const boundingBox = this.boundingBox(systemCoordinates.map(
            s => {
                return [s.x, s.y, s.z];
            }
        ));
        const center = boundingBox.center;
        const translationVec = [(viewboxDimensions[0] / 2) - center[0], (viewboxDimensions[1] / 2) - center[1]];
        const scaleExtent: [number, number] = [0.5, 8];

        const svg = d3.create("svg");
        const G = svg.append("svg:g");

        this._SVG = svg;
        this._G = G;
        this._translationVec = translationVec;

        let transformParams = this.transformParser(transform) || { translate: [center[0], center[1]], scale: 1 };


        const zoom = d3.zoom()
            .scaleExtent(scaleExtent)
            .translateExtent([[boundingBox.corner1[0] * 1.10, boundingBox.corner1[1] * 1.10], [boundingBox.corner2[0] * 1.10, boundingBox.corner2[1] * 1.10]])
            .on("zoom", this.zoomed)
            .on("end", this.zoomEnd);

        svg
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("id", "SVGSubway")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [center[0], center[1], ...viewboxDimensions])
            .attr("preserveAspectRatio", "xMidYMid meet")
            .call(zoom)
            .call(zoom.transform, d3.zoomIdentity.translate(transformParams.translate[0], transformParams.translate[1]).scale(transformParams.scale))
            ;

        // Painter's algorithm
        G
            .selectAll("line")
            .data(connectionCoordinates)
            .enter()
            .append("line")
            .attr("x1", d => String(d[0][0]))
            .attr("y1", d => String(d[0][1]))
            .attr("x2", d => String(d[1][0]))
            .attr("y2", d => String(d[1][1]))
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", "0.3")
            .attr("stroke-linejoin", "round")
            ;

        if (transform !== undefined) {
            G.attr("transform", d3.zoomIdentity.translate(transformParams.translate[0], transformParams.translate[1]).scale(transformParams.scale).toString());
        }

        G
            .selectAll("text")
            .data(systemCoordinates)
            .enter()
            .append("text")
            .attr("x", d => String(d.x))
            .attr("y", d => String(d.y))
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "3")
            .attr("font-family", "monospace")
            .text(d => d.systemName)
            ;


        const previousSVG =
            this.rootHTMLElement.getElementsByTagName(svg.node().tagName)[0];
        if (previousSVG === undefined) {
            this.rootHTMLElement.appendChild(svg.node());
        } else {
            this.rootHTMLElement.replaceChild(svg.node(), previousSVG);
        }

        // Bounding boxes don't exist before DOM interactions
        // So we must put this after they've happened
        G
            .selectAll("text")
            .each(function (data: any, index) {
                const dimensions = (this as any).getBBox();
                G.insert("rect", "text")
                    .attr("x", dimensions.x)
                    .attr("y", dimensions.y)
                    .attr("width", dimensions.width * 1.05)
                    .attr("height", dimensions.height * 1.05)
                    .style("fill", () => `rgb(${data.r},${data.g},${data.b})`)
            })
            ;
    }

    private YFlipper = (coordinates: coordinates3D): coordinates3D => {
        return {
            x: coordinates.x,
            y: -coordinates.y,
            z: coordinates.z,
        }
    }

    private boundingBox = (coordinates: number[][]): {
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
        this.G.attr("transform", transform);
    }

    private zoomEnd = (event) => {
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

    public onWindowResize() {
        this.update(this.systemData, this.connections);
    }
}