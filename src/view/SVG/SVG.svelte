<script lang="ts">
    import {
        systemNameSearchPubSub,
        mapDragPubSub,
        regionChangedPubsub,
        initialArgsPubsub,
        mapClickPubSub,
    } from "../../utils/svelte-store";
    import { onMount } from "svelte";
    import { SVGView } from "./SVGView";

    let root: HTMLDivElement;
    let bigMapDiv: HTMLDivElement;
    let miniMapDiv: HTMLDivElement;
    let svgViewBig: SVGView;
    let svgViewMini: SVGView;

    systemNameSearchPubSub.subscribe((systemSearch) => {
        if (svgViewBig === undefined) return;
        svgViewBig.centerOnNode(systemSearch.systemName);
    });

    mapDragPubSub.subscribe((transform) => {
        if (svgViewMini === undefined) return;
        svgViewMini.minimapRect(transform);
    });

    mapClickPubSub.subscribe((coordinates) => {
        if (svgViewBig === undefined) return;
        // TODO: this might cause the history api to bitch
        // depending on the frequency of events.
        // Needs a refactor
        svgViewBig.centerOnCoords(coordinates.x, coordinates.y);
    });

    regionChangedPubsub.subscribe((data) => {
        if (svgViewBig === undefined || svgViewMini === undefined) return;
        svgViewMini.update(data);
        svgViewBig.update(data, true);
    });

    initialArgsPubsub.subscribe((data) => {
        if (svgViewBig === undefined) return;
        // svgViewBig.applyTransform(data.args);
    });

    onMount(() => {
        svgViewBig = new SVGView(bigMapDiv);
        svgViewBig.addTransformListener(mapDragPubSub);
        svgViewMini = new SVGView(miniMapDiv);
        svgViewMini.addClickListener(mapClickPubSub);
    });
</script>

<div bind:this={root} id="SVGRootDiv">
    <div bind:this={miniMapDiv} id="SVGMiniMap" />
    <div bind:this={bigMapDiv} id="SVGBigMap" />
</div>

<style>
    #SVGRootDiv {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    :global(#SVGBigMap #SVGRoot),
    :global(#SVGMiniMap #SVGRoot) {
        width: 100%;
        height: 100%;
    }

    #SVGMiniMap {
        width: 15%;
        height: 100%;
    }

    #SVGBigMap {
        width: 85%;
        height: 100%;
        text-align: center;
        overflow: hidden;
    }

    :global(#SVGBigMap), :global(#SVGMiniMap) {
        cursor: move;
    }

    :global(#SVGBigMap g text) {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.7vh;
        text-anchor: middle;
        cursor: pointer;
    }

    :global(#SVGBigMap g path) {
        stroke: whitesmoke;
        stroke-width: 1.5;
    }

    :global(#SVGBigMap g polygon, #SVGBigMap g ellipse) {
        cursor: pointer;
        fill: white;
        stroke-width: 0.3;
    }

    :global(#SVGMiniMap g polygon, #SVGMiniMap g ellipse) {
        fill: rgb(0, 205, 219);
        stroke: black;
    }

    :global(#SVGMiniMap g path) {
        stroke: whitesmoke;
        stroke-width: 5;
    }

    :global(#SVGMiniMap g text){
        display: none;
    }
</style>
