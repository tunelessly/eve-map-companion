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

    onMount(() => {
        svgViewMini = new SVGView(miniMapDiv);

        const settledPromise = new Promise<void>((resolve, reject) => {
            regionChangedPubsub.subscribe((data) => {
                if(data === undefined) reject();
                svgViewMini.update(data).then((_) => resolve());
            });
        });

        settledPromise.then((_) => {
            mapDragPubSub.subscribe((transform) => {
                if(transform === undefined) return;
                svgViewMini.minimapRect(transform);
            });

            svgViewMini.addClickListener(mapClickPubSub);
        });
    });
</script>

<div bind:this={miniMapDiv} id="SVGMiniMap" />

<style>
    #SVGMiniMap {
        width: 100%;
        height: fit-content;
    }

    :global(#SVGMiniMap #SVGRoot) {
        width: 100%;
        height: 100%;
    }

    :global(#SVGMiniMap g polygon, #SVGMiniMap g ellipse) {
        fill: rgb(0, 205, 219);
        stroke: black;
    }

    :global(#SVGMiniMap g path) {
        stroke: whitesmoke;
        stroke-width: 5;
    }

    :global(#SVGMiniMap g text) {
        display: none;
    }

    :global(#svg-minimap-rect) {
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
