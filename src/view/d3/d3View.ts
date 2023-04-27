import type { ViewLike } from "../viewlike";
import type { coordinates3D } from "../../model/galaxy.js";
import * as d3 from "d3";

export class d3View implements ViewLike {
    private readonly _rootHTMLElement: HTMLElement;
    private _SVG: d3.Selection<SVGSVGElement, undefined, null, undefined>;
    private _G: d3.Selection<d3.BaseType, undefined, null, undefined>;
    private _translationVec: number[];


    private get rootHTMLElement() { return this._rootHTMLElement; }
    private get SVG() { return this._SVG; }
    private get G() { return this._G; }
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

        const connectionsFiltered = connections.filter(x => x[0] !== undefined && x[1] !== undefined); //TODO

        const rect = this.rootHTMLElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const systemCoordinates = systemData.map(x => [x[1].x, x[1].y, x[1].z]);
        const connectionCoordinates = connectionsFiltered.map(c => {
            const start = c[0];
            const end = c[1];
            return [[start.x, start.y, start.z], [end.x, end.y, end.z]];
        });


        const asSubway = systemData.reduce((acc, curr) => {
            return curr[1].y === 0 && acc;
        }, true);
        console.log("SVG Subway mode?", asSubway);

        // Both axes must have the same scaling function
        // for obvious aspect ratio reasons
        const domain = this.domain(systemCoordinates, asSubway);
        const scaler = d3.scaleLinear().domain(domain).range([0, Math.min(width, height) * 0.9]);

        const scaledSystemCoordinates = systemCoordinates.map(c => c.map(scaler));
        const scaledConnections = connectionCoordinates.map(c => {
            return [c[0].map(scaler), c[1].map(scaler)];
        });

        const center = this.boundingBox(scaledSystemCoordinates).center;
        const translationVec = [(width / 2) - center[0], (height / 2) + (asSubway ? center[2] : center[1])]; // Because Y grows towards the 'down' direction
        const scaleExtent: [number, number] = [1, 8];

        const zoom = d3.zoom().scaleExtent(scaleExtent).on("zoom", this.zoomed);
        const svg = d3.create("svg")
            .attr("width", width)
            .attr("height", height)
            .call(zoom)
            ;

        // Painter's algorithm
        const G = svg.append("svg:g");
        G
            .selectAll("line")
            .data(scaledConnections)
            .enter()
            .append("line")
            .attr("x1", d => String(d[0][0]))
            .attr("y1", d => asSubway ? String(-d[0][2]) : String(-d[0][1]))
            .attr("x2", d => String(d[1][0]))
            .attr("y2", d => asSubway ? String(-d[1][2]) : String(-d[1][1]))
            .attr("transform", `translate(${translationVec[0]} ${translationVec[1]})`)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-linejoin", "round")
            ;

        G
            .attr("viewbox", [0, 0, width, height])
            .selectAll("circle")
            .data(scaledSystemCoordinates)
            .enter()
            .append("circle")
            .attr("cx", d => String(d[0]))
            .attr("cy", d => asSubway ? String(-d[2]) : String(-d[1]))
            .attr("r", 3)
            .attr("transform", `translate(${translationVec[0]} ${translationVec[1]})`)
            .style("fill", "red")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            ;

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
    }

    private centroid = (coordinates: number[][]): number[] => {
        return coordinates.reduce((acc, val) => {
            const x = val[0];
            const y = val[1];
            const z = val[2];
            acc[0] += x;
            acc[1] += y;
            acc[2] += z;
            return acc;
        }, [0, 0, 0])
            .map(x => x / coordinates.length)
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

        return [Math.min(xDomain[0], yDomain[0]), Math.max(xDomain[1], yDomain[1])];
    }

    private zoomed = (event) => {
        const { transform } = event;
        this.G.attr("transform", transform);
    }

    public onWindowResize() { }
}