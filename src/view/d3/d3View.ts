import type { ViewLike } from "../viewlike";
import type { coordinates3D } from "../../model/galaxy.js";
import * as d3 from "d3";

export class d3View implements ViewLike {
    private readonly _rootHTMLElement: HTMLElement;
    private _SVG: d3.Selection<SVGSVGElement, undefined, null, undefined>;
    private _G: d3.Selection<d3.BaseType, undefined, null, undefined>;


    private get rootHTMLElement() { return this._rootHTMLElement; }
    private get G() { return this._G; }

    constructor(rootHTMLElement: HTMLElement) {
        this._rootHTMLElement = rootHTMLElement;
    }

    public dispose() { }

    public destroy() { }

    public update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][],
    ) {

        const rect = this.rootHTMLElement.getBoundingClientRect()
        const width = rect.width;
        const height = rect.height;
        const data = systemData.map(x => [x[1].x, x[1].y, x[1].z]);

        const subwayMode = systemData.reduce((acc, curr) => {
            return curr[1].y === 0;
        }, true);
        console.log(`Am I in subway mode? ${subwayMode}`);

        const xDomain = data.reduce((acc, curr) => {
            const x = curr[0];
            const smallest = Math.min(x, acc[0]);
            const largest = Math.max(x, acc[1]);
            return [smallest, largest];
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
        const xScaler = d3.scaleLinear()
            .domain(xDomain)
            .range([-500, 500]);

        const yDomain = data.reduce((acc, curr) => {
            const y = subwayMode ? curr[2] : curr[1];
            const smallest = Math.min(y, acc[0]);
            const largest = Math.max(y, acc[1]);
            return [smallest, largest];
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
        const yScaler = d3.scaleLinear()
            .domain(yDomain)
            .range([-500, 500]);



        const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", this.zoomed);
        const svg = d3.create("svg")
            .attr("width", width)
            .attr("height", height)
            .call(zoom);
        const g = svg.append("svg:g");
        g
            .attr("viewbox", [0, 0, width, height])
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => String(xScaler(d[0])))
            .attr("cy", d => subwayMode ? String(-yScaler(d[2])) : String(-yScaler(d[1])))
            .attr("r", 3)
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
        this._G = g;
    }

    private zoomed = (event) => {
        const { transform } = event;
        this.G.attr("transform", transform);
    }

    private magnitude = (x: number): number => {
        return Math.pow(10, Math.floor(Math.log10(x)));
    }

    public onWindowResize() { }
}