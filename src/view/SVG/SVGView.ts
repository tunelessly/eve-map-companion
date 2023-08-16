import type { ViewLike } from "../viewlike";
import { HSV2RGB, sectoHSV } from "../utils/utils";
import { jaroWinkler } from "jaro-winkler-typescript";
import * as d3 from "d3";
import type { Writable } from "svelte/store";
import type { Transform, UserCoordinates } from "../../utils/svelte-store"

///////////////////////////////////////////////////////////////////////////////
//
// Minimap method
// 1) Get the screen-space bounding box for the SVG.
// 2) Map the screen-space coordinates for this rect into SVG user coordinates.
// 2a) (Optional) Verify that the rectangle is correct by drawing it on the 
//          larger SVG.
// 3) This SVG user coordinate rectangle represents the visible portion.
//          We will simply draw it on the smaller SVG.
// 4) Apply the transform performed on the larger SVG on the rectangle of the
//          the smaller SVG.
// 5) ???
// 6) Profit.
//
///////////////////////////////////////////////////////////////////////////////

export class SVGView implements ViewLike {
    protected readonly _rootHTMLElement: HTMLElement;
    protected _SVG: d3.Selection<SVGSVGElement, unknown, null, undefined>;
    protected _G: d3.Selection<d3.BaseType, unknown, null, undefined>;
    protected _zoom: d3.ZoomBehavior<Element, unknown>;
    protected _systemNames: string[] = [];
    protected _initialTransform: { scale: { x: number, y: number }, translate: { x: number, y: number } };
    protected _viewboxDimensions = [100, 100];
    protected _transformListener: Writable<Transform>;
    protected _clickListener: Writable<UserCoordinates>;
    protected _boundingRect: { x: number, y: number, width: number, height: number };

    protected get rootHTMLElement() { return this._rootHTMLElement; }
    protected get SVG() { return this._SVG; }
    protected get G() { return this._G; }
    protected get zoom() { return this._zoom; }
    protected get names() { return this._systemNames; }
    protected get viewboxDimensions() { return this._viewboxDimensions; }
    protected get transformListener() { return this._transformListener; }
    protected get clickListener() { return this._clickListener; }
    protected get initialTransform() { return this._initialTransform; }
    protected get boundingRect() { return this._boundingRect; }


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

    public update(regionName: string, isInteractive: boolean = false): Promise<void> {
        return d3.svg(`${regionName}.svg`)
            .then(svgDocument => {
                const svgElement: SVGSVGElement = <SVGSVGElement><any>svgDocument.documentElement;
                this.replaceOrAppend(svgElement);

                const SVG = d3.select(svgElement);
                const G = SVG.select('#graph0');
                const initialTransform = this.parseTransformList((<SVGSVGElement>G.node()).transform.baseVal);
                this._initialTransform = initialTransform;
                SVG
                    // Remove the width and height attribute so as not to
                    // override any potential CSS rules
                    .attr("width", null)
                    .attr("height", null)
                    //
                    .attr("id", "SVGRoot")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    ;
                const originalViewbox = SVG.node().viewBox.baseVal;
                this._viewboxDimensions = [originalViewbox.width, originalViewbox.height];

                // Remove the all-white polygon acting as the background to the SVG.
                G.select("polygon").remove();

                this._SVG = SVG;
                this._G = G;

                ////////////////////////////////////////////////////////////////////////////////
                // Get all system names
                ////////////////////////////////////////////////////////////////////////////////
                const systemNames = G.selectAll(".node").nodes().map((data: SVGGElement) => data.id);
                this._systemNames = systemNames;


                ////////////////////////////////////////////////////////////////////////////////
                // Compute the exterior container's screen-space rectangle expressed in internal
                // SVG user coordinates. This rectangle represents the actually-visible portion
                // of the SVG including any space created around the viewbox that may have been 
                // cause by mechanisms that preserve the aspect ratio of the SVG's contents.
                //
                const rect = this.SVG.node().getBoundingClientRect();
                const matrix = SVG.node().getScreenCTM();
                const x = (rect.x - matrix.e) / matrix.a;
                const y = (rect.y - matrix.f) / matrix.d;
                const width = rect.width / matrix.a;
                const height = rect.height / matrix.d;
                this._boundingRect = { x, y, width, height };
                ////////////////////////////////////////////////////////////////////////////////

                if (isInteractive) {
                    // Non-interactive versions of the SVG (e.g. the minimap) do not need
                    // any zoom/pan behavior.
                    const zoom = d3.zoom()
                        .scaleExtent([1, 8])
                        .translateExtent([
                            [0 - initialTransform.translate.x, 0 - initialTransform.translate.y],
                            [originalViewbox.width - initialTransform.translate.x, originalViewbox.height - initialTransform.translate.y]
                        ])
                        .on('zoom', this.zoomed)
                        .on('end', this.zoomEnd);


                    const initiald3Transform = d3.zoomIdentity
                        .translate(initialTransform.translate.x, initialTransform.translate.y)
                        .scale(initialTransform.scale.x);
                    this.addZoomBehavior(zoom, initiald3Transform);
                }
            })
            .catch(console.error);
    }

    private addZoomBehavior(zoom: d3.ZoomBehavior<Element, unknown>, initialTransform: d3.ZoomTransform) {
        this._zoom = zoom;
        this.SVG.call(zoom);
        this.SVG.call(zoom.transform, initialTransform);
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Parses the transformation matrix into a friendlier, more obvious format
    ///////////////////////////////////////////////////////////////////////////////
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

    ///////////////////////////////////////////////////////////////////////////////
    // Replaces/appends the SVG in/into the parent container.
    ///////////////////////////////////////////////////////////////////////////////
    private replaceOrAppend(element: SVGSVGElement) {
        const previousSVG = this.rootHTMLElement.getElementsByTagName('svg')[0];
        if (previousSVG === undefined)
            this.rootHTMLElement.appendChild(element);
        else
            this.rootHTMLElement.replaceChild(element, previousSVG);
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Parses an obfuscated query string into a transform and then applies it.
    ///////////////////////////////////////////////////////////////////////////////
    public applyTransform(transformStr: string) {
        const transform = this.transformParser(transformStr);
        if (transform === undefined) return;
        const svg = this.SVG;
        const d3transform = d3.zoomIdentity.translate(transform.translate[0], transform.translate[1]).scale(transform.scale);
        svg.call(this.zoom.transform, d3transform);
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Centers the SVG's viewbox on the given node's name
    ///////////////////////////////////////////////////////////////////////////////
    public centerOnNode(searchStr: string) {
        const G = this.G;
        const matches = this.names.map(name => {
            const d: number = jaroWinkler(name.toLowerCase(), searchStr.toLowerCase());
            return { name, distance: d };
        }).sort((x, y) => y.distance - x.distance);
        let closestMatch = matches[0].name;
        const selection = G.select(`#${closestMatch} text`);
        const selectedNode: SVGTextElement = <SVGTextElement>selection.node();
        const x = selectedNode.x.baseVal[0].value;
        const y = selectedNode.y.baseVal[0].value;
        this.zoom.translateTo(this.SVG, x, y);
        // TODO: Why...?
        this.zoom.translateTo(this.SVG, x, y);
        this.zoom.scaleTo(this.SVG, 3);
    }


    ///////////////////////////////////////////////////////////////////////////////
    // Draws a rectangle on the origin + an offset.
    // This rectangle is then rescaled and translated by the given transform 
    ///////////////////////////////////////////////////////////////////////////////
    public minimapRect(t: Transform) {
        // TODO: this can likely be rewritten in terms of
        // transformations in d3 but their documentation is
        // quite unhelpful and I'm sick and tired of messing with this
        const dx = -t.x / t.k;
        const dy = -t.y / t.k;
        const x = t.rect.x / t.k;
        const y = t.rect.y / t.k;
        const width = t.rect.width / t.k;
        const height = t.rect.height / t.k;

        this.G.select("#svg-minimap-rect").remove();
        this.G
            .append("rect")
            .attr("id", "svg-minimap-rect")
            .attr("width", width)
            .attr("height", height)
            .attr("x", x)
            .attr("y", y) 
            .attr('transform', `translate(${dx},${dy})`)
            ;
    }

    protected zoomed = (event) => {
        const { transform } = event;
        this.G.attr("transform", transform);
        if (this.transformListener !== undefined) this.transformListener.set({ ...transform, rect: this.boundingRect, originalTransform: transform });
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