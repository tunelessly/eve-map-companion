import type { ViewLike } from "../viewlike";
import { HSV2RGB, sectoHSV } from "../utils/utils";
import { jaroWinkler } from "jaro-winkler-typescript";
import * as d3 from "d3";
import type { Writable } from "svelte/store";
import type { Transform, UserCoordinates } from "../../utils/svelte-store"

export class SVGView implements ViewLike {
    protected readonly _rootHTMLElement: HTMLElement;
    protected _SVG: d3.Selection<SVGSVGElement, unknown, null, undefined>;
    protected _G: d3.Selection<d3.BaseType, unknown, null, undefined>;
    protected _translationVec: number[];
    protected _zoom: d3.ZoomBehavior<Element, unknown>;
    protected _zoomScale: number;
    protected _systemNames: string[] = [];
    protected _boundingBox: {
        corner1: [number, number],
        corner2: [number, number],
        center: [number, number],
    };
    protected readonly _viewboxDimensions = [100, 100];
    protected _transformListener: Writable<Transform>;
    protected _clickListener: Writable<UserCoordinates>;

    protected get rootHTMLElement() { return this._rootHTMLElement; }
    protected get SVG() { return this._SVG; }
    protected get G() { return this._G; }
    protected get translationVec() { return this._translationVec; }
    protected get zoom() { return this._zoom; }
    protected get names() { return this._systemNames; }
    protected get boundingBox() { return this._boundingBox; }
    protected get viewboxDimensions() { return this._viewboxDimensions; }
    protected get transformListener() { return this._transformListener; }
    protected get clickListener() { return this._clickListener; }
    protected get zoomScale() { return this._zoomScale; }


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

    public addClickListener(listener) {
        this._clickListener = listener;
    }

    public update(regionName: string, isInteractive: boolean = false): void {
        d3.svg(`${regionName}.svg`)
            .then(svgDocument => {
                const svgElement: SVGSVGElement = <SVGSVGElement><any>svgDocument.documentElement;
                this.replaceOrAppend(svgElement);
                const SVG = d3.select(svgElement);
                const G = SVG.select('#graph0');
                const initialTransform = this.parseTransformList((<SVGSVGElement>G.node()).transform.baseVal);
                SVG.attr("width", null).attr("height", null);
                const originalViewbox = SVG.node().viewBox.baseVal;
                const largestViewBoxDimension = Math.max(originalViewbox.width, originalViewbox.height)
                SVG.attr("viewBox", [0, 0, largestViewBoxDimension, largestViewBoxDimension]);
                this._SVG = SVG;
                this._G = G;

                const coords = SVG.selectAll("text")
                    .nodes()
                    .map(
                        (data: SVGTextElement) => {
                            return { x: data.x.baseVal[0].value, y: data.y.baseVal[0].value };
                        }
                    );
                this._boundingBox = this.computeBoundingBox(coords);

                const zoom = d3.zoom()
                    .scaleExtent([0.5, 8])
                    .translateExtent([
                        [0 - initialTransform.translate.x, 0 - initialTransform.translate.y], 
                        [originalViewbox.width - initialTransform.translate.x, originalViewbox.height - initialTransform.translate.y]
                    ])
                    .on('zoom', this.zoomed)
                    .on('end', this.zoomEnd);


                const initiald3Transform = d3.zoomIdentity
                    .translate(initialTransform.translate.x, initialTransform.translate.y)
                    .scale(initialTransform.scale.x);

                SVG.call(zoom);
                SVG.call(zoom.transform, initiald3Transform);
            })
            .catch(console.error);

    }

    private parseTransformList(transformList: SVGTransformList) {
        const retVal = { scale: { x: 1, y: 1 }, translate: { x: 0, y: 0 } };
        for (let transform of transformList) {
            const m = transform.matrix;
            switch (transform.type) {
                case SVGTransform.SVG_TRANSFORM_SCALE: {
                    retVal["scale"] = { x: m.a, y: m.d };
                    break;
                }
                case SVGTransform.SVG_TRANSFORM_TRANSLATE: {
                    retVal["translate"] = { x: m.e, y: m.f };
                    break;
                }
                case SVGTransform.SVG_TRANSFORM_ROTATE:
                case SVGTransform.SVG_TRANSFORM_UNKNOWN:
                case SVGTransform.SVG_TRANSFORM_MATRIX:
                default:
                    break;
            }
        }
        return retVal;
    }

    private replaceOrAppend(element: SVGSVGElement) {
        const previousSVG = this.rootHTMLElement.getElementsByTagName('svg')[0];
        if (previousSVG === undefined)
            this.rootHTMLElement.appendChild(element);
        else
            this.rootHTMLElement.replaceChild(element, previousSVG);
    }

    public applyTransform(transformStr: string) {
        const transform = this.transformParser(transformStr);
        if (transform === undefined) return;
        const svg = this.SVG;
        const d3transform = d3.zoomIdentity.translate(transform.translate[0], transform.translate[1]).scale(transform.scale);
        svg.call(this.zoom.transform, d3transform);
    }

    public centerOnCoords(x: number, y: number, newScale?: number) {
        const svg = this.SVG;
        const viewboxDimensions = this.viewboxDimensions;
        const zoom = this.zoom;
        const scale = newScale || this.zoomScale;
        const center = this.boundingBox.center;
        const X = -x * scale + viewboxDimensions[0] / 2 + center[0];
        const Y = -y * scale + viewboxDimensions[0] / 2 + center[1];
        const newZoom = d3.zoomIdentity.translate(X, Y).scale(scale);
        svg.call(zoom.transform, newZoom);
    }

    public centerOnNode(searchStr: string) {
        const svg = this.SVG;
        const matches = this.names.map(name => {
            const d: number = jaroWinkler(name.toLowerCase(), searchStr.toLowerCase());
            return { name, distance: d };
        }).sort((x, y) => y.distance - x.distance);
        const closestMatch = matches[0];
        const selection = svg.select(`#system-${closestMatch.name}`);
        const x = parseFloat(selection.attr("x"));
        const y = parseFloat(selection.attr("y"));
        this.centerOnCoords(x, y, 2);
    }

    public minimapRect(t: Transform) {
        // Estoura volta e meia
        const center = this.boundingBox.center;
        const viewboxDimensions = this.viewboxDimensions;
        const transform = d3.zoomIdentity.translate(t.x, t.y).scale(t.k).invert([center[0], center[1]]);
        const widthScreen = (this.G.node() as SVGGElement).getBoundingClientRect().width;
        const heightScreen = (this.G.node() as SVGGElement).getBoundingClientRect().height;
        const squareScreen = Math.min(widthScreen, heightScreen);
        const ScreenToUserRatio = squareScreen / this.viewboxDimensions[0];
        const x = transform[0] + viewboxDimensions[0] / 2 / t.k;
        const y = transform[1] + viewboxDimensions[1] / 2 / t.k;
        // TODO: Hardcoded minimum aspect ratio only works because
        // the SVG's hardcoded aspect ratio is 1:1
        const widthUser = (squareScreen * Math.max(t.aspectRatio, 1)) / ScreenToUserRatio / t.k;
        const heightUser = (squareScreen * 1 / Math.min(t.aspectRatio, 1)) / ScreenToUserRatio / t.k;

        // Fucking stupid top left corner idiocy
        const actualFuckingSquareCenterUserX = x - ((squareScreen * Math.max(t.aspectRatio, 1)) / ScreenToUserRatio / 2) / t.k;
        const actualFuckingSquareCenterUserY = y - ((squareScreen * 1 / Math.min(t.aspectRatio, 1)) / ScreenToUserRatio / 2) / t.k;
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

    protected computeBoundingBox = (coordinates: { x: number, y: number }[]): {
        corner1: [number, number],
        corner2: [number, number],
        center: [number, number]
    } => {
        return coordinates.reduce((acc, val) => {
            const x = val.x;
            const y = val.y;
            const corner1 = acc.corner1;
            const corner2 = acc.corner2;
            if (x <= corner1[0]) corner1[0] = x;
            if (y <= corner1[1]) corner1[1] = y;
            if (x >= corner2[0]) corner2[0] = x;
            if (y >= corner2[1]) corner2[1] = y;
            acc.center = [(corner2[0] + corner1[0]) / 2, (corner2[1] + corner1[1]) / 2];
            return acc;
        }, {
            corner1: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            corner2: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
            center: [0, 0]
        });
    }

    protected zoomed = (event) => {
        const { transform } = event;
        const screenWidth = this.rootHTMLElement.clientWidth;
        const screenHeight = this.rootHTMLElement.clientHeight;
        const aspectRatio = screenWidth / screenHeight;
        this.G.attr("transform", transform);
        if (this.transformListener !== undefined) this.transformListener.set({ ...transform, aspectRatio });
        this._zoomScale = transform.k;
    }

    protected zoomEnd = (event) => {
        this.zoomed(event);
        const { transform } = event;
        const serialized = btoa(JSON.stringify(transform));
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set("args", serialized);
        history.replaceState({}, '', currentURL.toString());
    }

    protected transformParser = (transform: string): { translate: number[], scale: number } => {
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