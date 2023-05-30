<script lang="ts">
    import { systemSearchPubSub } from "../../utils/svelte-store";
    import { onMount } from "svelte";
    import type { coordinates3D } from "../../model/galaxy.js";
    import { SVGView } from "./SVGView.js";

    let element: HTMLElement;
    let svgView: SVGView;
    export let systemData: [string, coordinates3D, number][];
    export let connectionData: [coordinates3D, coordinates3D][];
    export let transform: string = "";

    systemSearchPubSub.subscribe((name: string) => {
        if (svgView === undefined) return;
        svgView.centerOnNode(name);
    });

    const onChange = (systemData, connectionData) => {
        if (svgView === undefined) return;
        svgView.update(systemData, connectionData, transform);
    };

    onMount(() => {
        svgView = new SVGView(element);
    });

    $: onChange(systemData, connectionData);
</script>

<div bind:this={element} />

<style>
    div {
        width: 100%;
        height: 100%;
        text-align: center;
        overflow: hidden;
    }

    div :global(#SVGSubway) {
        width: 100%;
        height: 100%;
        cursor: move;
    }

    div :global(.svg-text) {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        text-anchor: middle;
        font-size: 2pt;
        cursor: pointer;
    }

    div :global(.svg-line) {
        stroke: whitesmoke;
        stroke-width: 0.5;
        stroke-linejoin: round;
    }

    div :global(.svg-node) {
        cursor: pointer;
        fill: white;
        stroke-width: 0.3;
    }
</style>
