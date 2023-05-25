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
    ) {
        this._systemData = systemData;
        this._connections = connections;

        const rect = this.rootHTMLElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const viewboxDimensions = [100, 100];
        const systemCoordinates = systemData.map(x => {
            return {
                systemName: x[0],
                ...x[1],
                ...HSV2RGB(sectoHSV(x[2])),
            };
        });
        const connectionCoordinates = connections.map(c => {
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
        console.dir(boundingBox);
        const translationVec = [(viewboxDimensions[0] / 2) - center[0], (viewboxDimensions[1] / 2) + center[1]]; // Because Y grows towards the 'down' direction
        const scaleExtent: [number, number] = [0.5, 8];

        const zoom = d3.zoom()
            .scaleExtent(scaleExtent)
            .translateExtent([[-width / 4, -height / 4], [width / 4, height / 4]])
            .on("zoom", this.zoomed);

        const svg = d3.create("svg")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("id", "SVGSubway")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [center[0], center[1], ...viewboxDimensions])
            .attr("preserveAspectRatio", "xMidYMid meet")
            .call(zoom)
            ;

        // Painter's algorithm
        const G = svg.append("svg:g");
        G
            .selectAll("line")
            .data(connectionCoordinates)
            .enter()
            .append("line")
            .attr("x1", d => String(d[0][0]))
            .attr("y1", d => String(-d[0][1]))
            .attr("x2", d => String(d[1][0]))
            .attr("y2", d => String(-d[1][1]))
            .attr("transform", `translate(${translationVec[0]} ${translationVec[1]})`)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", "0.3")
            .attr("stroke-linejoin", "round")
            ;

        G
            .selectAll("circle")
            .data(systemCoordinates)
            .enter()
            .append("circle")
            .attr("cx", d => String(d.x))
            .attr("cy", d => String(-d.y))
            .attr("r", "1")
            .attr("transform", `translate(${translationVec[0]} ${translationVec[1]})`)
            .attr("system-name", d => d.systemName)
            .style("fill", d => `rgb(${d.r},${d.g},${d.b})`)
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            ;

        // G
        //     .selectAll("text")
        //     .data(systemCoordinates)
        //     .enter()
        //     .append("text")
        //     .attr("x", d => String(d.x))
        //     .attr("y", d => String(-d.y + height * 0.0105))
        //     .attr("transform", `translate(${translationVec[0]} ${translationVec[1]})`)
        //     .attr("dominant-baseline", "middle")
        //     .attr("text-anchor", "middle")
        //     .attr("fill", "white")
        //     .attr("font-size", "0.5rem")
        //     .attr("stroke", "black")
        //     .attr("stroke-width", "1px")
        //     .attr("paint-order", "stroke")
        //     .text(d => d.systemName)
        //     ;


        const previousSVG =
            this.rootHTMLElement.getElementsByTagName(svg.node().tagName)[0];
        if (previousSVG === undefined) {
            this.rootHTMLElement.appendChild(svg.node());
        } else {
            this.rootHTMLElement.replaceChild(svg.node(), previousSVG);
        }
        this._SVG = svg;
        this._G = G;
        this._translationVec = translationVec;

        // Bounding boxes don't exist before DOM interactions
        // So we must put this after they've happened
        // G
        //     .selectAll("text")
        //     .each(function (data: any, index) {
        //         const dimensions = (this as any).getBBox();
        //         G.insert("rect", "text")
        //             .attr("x", dimensions.x)
        //             .attr("y", dimensions.y)
        //             .attr("width", dimensions.width * 1.05)
        //             .attr("height", dimensions.height * 1.05)
        //             .attr("transform", `translate(${translationVec[0]} ${translationVec[1]})`)
        //             .style("fill", () => `rgb(${data.r},${data.g},${data.b})`)
        //     })
        //     ;
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


    private domain = (coordinates: number[][], asSubway: boolean): number[] => {
        const xDomain = coordinates.reduce((acc, curr) => {
            const x = curr[0];
            let smallest = Math.min(x, acc[0]);
            let largest = Math.max(x, acc[1]);
            smallest = smallest < 0 ? Math.floor(smallest) : Math.ceil(smallest)
            largest = largest < 0 ? Math.floor(largest) : Math.ceil(largest)
            return [smallest, largest];
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);

        const yDomain = coordinates.reduce((acc, curr) => {
            const y = asSubway ? curr[2] : curr[1];
            let smallest = Math.min(y, acc[0]);
            let largest = Math.max(y, acc[1]);
            smallest = smallest < 0 ? Math.floor(smallest) : Math.ceil(smallest)
            largest = largest < 0 ? Math.floor(largest) : Math.ceil(largest)
            return [smallest, largest];
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);

        const retVal = [Math.min(xDomain[0], yDomain[0]), Math.max(xDomain[1], yDomain[1])]
        return retVal;
    }

    private zoomed = (event) => {
        const { transform } = event;
        this.G.attr("transform", transform);
    }

    public onWindowResize() {
        this.update(this.systemData, this.connections);
    }
}