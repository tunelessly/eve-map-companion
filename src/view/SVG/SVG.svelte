<script lang="ts">
    import {
        systemNameSearchPubSub,
        transformPubSub,
    } from "../../utils/svelte-store";
    import { onMount } from "svelte";
    import type { coordinates3D } from "../../model/galaxy.js";
    import { SVGView } from "./SVGView.js";

    let root: HTMLDivElement;
    let bigMapDiv: HTMLDivElement;
    let miniMapDiv: HTMLDivElement;
    let svgViewBig: SVGView;
    let svgViewMini: SVGView;
    export let systemData: [string, coordinates3D, number][];
    export let connectionData: [coordinates3D, coordinates3D][];
    export let transform: string = "";

    systemNameSearchPubSub.subscribe((systemSearch) => {
        if (svgViewBig === undefined) return;
        svgViewBig.centerOnNode(systemSearch.systemName);
    });

    transformPubSub.subscribe((transform) => {
        if (svgViewMini === undefined) return;
        svgViewMini.minimapRect(transform);
    });

    const onChange = (systemData, connectionData) => {
        if (svgViewBig === undefined || svgViewMini === undefined) return;
        svgViewMini.update(systemData, connectionData, transform);
        svgViewBig.update(systemData, connectionData, transform, true);
    };

    onMount(() => {
        svgViewMini = new SVGView(miniMapDiv);
        svgViewBig = new SVGView(bigMapDiv);
        svgViewBig.addTransformListener(transformPubSub);
    });

    $: onChange(systemData, connectionData);
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
