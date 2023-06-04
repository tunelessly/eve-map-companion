<script lang="ts">
    import {
        systemNameSearchPubSub,
        mapDragPubSub,
        graphDataPubsub,
        initialArgsPubsub,
        mapClickPubSub,
    } from "../../utils/svelte-store";
    import { onMount } from "svelte";
    import { SVGView } from "./SVGView.js";

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

    graphDataPubsub.subscribe((data) => {
        if (svgViewBig === undefined || svgViewMini === undefined) return;
        svgViewMini.update(data.nodeData, data.edgeData);
        svgViewBig.update(data.nodeData, data.edgeData, true);
    });

    initialArgsPubsub.subscribe((data) => {
        if (svgViewBig === undefined || svgViewMini === undefined) return;
        svgViewBig.applyTransform(data.args);
    });

    onMount(() => {
        svgViewMini = new SVGView(miniMapDiv);
        svgViewBig = new SVGView(bigMapDiv);
        svgViewBig.addTransformListener(mapDragPubSub);
        svgViewMini.addClickListener(mapClickPubSub);
    });
</script>

<div bind:this={root} id="SVGRoot">
    <div bind:this={miniMapDiv} id="SVGMiniMap" />
    <div bind:this={bigMapDiv} id="SVGBigMap" />
</div>

<style>
    #SVGRoot {
        display: flex;
        flex-direction: row;
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

    #SVGBigMap :global(#SVGSubway),
    #SVGMiniMap :global(#SVGSubway) {
        width: 100%;
        height: 100%;
    }

    #SVGBigMap :global(#SVGSubway) {
        cursor: move;
    }

    #SVGBigMap :global(.svg-text) {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        text-anchor: middle;
        font-size: 2pt;
        cursor: pointer;
    }

    #SVGBigMap :global(.svg-line) {
        stroke: whitesmoke;
        stroke-width: 0.5;
        stroke-linejoin: round;
    }

    #SVGBigMap :global(.svg-node) {
        cursor: pointer;
        fill: white;
        stroke-width: 0.3;
    }

    #SVGMiniMap :global(.svg-line) {
        stroke: whitesmoke;
        stroke-width: 1;
        stroke-linejoin: round;
    }

    #SVGMiniMap :global(.svg-circle) {
        fill: rgb(0, 205, 219);
        stroke: black;
    }
</style>
