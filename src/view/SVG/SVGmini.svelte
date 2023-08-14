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
    let miniMapDiv: HTMLDivElement;
    let svgViewMini: SVGView;

    mapDragPubSub.subscribe((transform) => {
        if (svgViewMini === undefined) return;
        svgViewMini.minimapRect(transform);
    });

    regionChangedPubsub.subscribe((data) => {
        if (svgViewMini === undefined) return;
        svgViewMini.update(data);
    });

    onMount(() => {
        svgViewMini = new SVGView(miniMapDiv);
        svgViewMini.addClickListener(mapClickPubSub);
    });
</script>

    <div bind:this={miniMapDiv} id="SVGMiniMap" />


<style>

    #SVGMiniMap {
        width: 100%;
        height: fit-content;
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

    :global(#svg-minimap-rect){
        stroke: rgb(229, 255, 0);
        stroke-width: 10;
        fill: none;
    }


    @media only screen and (max-width: 600px) {

        #SVGMiniMap {
            visibility: collapse;
        }
    }
</style>
