import type { ViewLike } from "../viewlike";
import type { coordinates3D } from "../../model/galaxy.js";
import * as d3 from "d3";
import { append } from "svelte/internal";

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
        const data = systemData.map(x => [x[1].x, x[1].y]);

        const dataMagnitude = systemData.flatMap(x => [x[1].x, x[1].y, x[1].z]).reduce((acc, curr) => {
            const m = this.magnitude(curr);
            if (m >= acc) {
                return m;
            }
            else {
                return acc;
            }
        }, 1);

        const magnitudeDiffFrom100 = Math.log10(100) - Math.log10(dataMagnitude);
        const scalingFactor = Math.pow(10, magnitudeDiffFrom100);
        console.log(`Data: ${dataMagnitude} Scaling factor: ${scalingFactor}`);

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
            .attr("cx", d => String(d[0] * scalingFactor))
            .attr("cy", d => String(d[1] * scalingFactor))
            .attr("r", 5.25)
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