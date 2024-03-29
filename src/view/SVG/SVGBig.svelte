<script lang="ts">
    import {
        systemNameSearchPubSub,
        mapDragPubSub,
        regionChangedPubsub,
        initialArgsPubsub,
        miniMapClickPubSub,
    } from "../../utils/svelte-store";
    import { onMount } from "svelte";
    import { SVGView } from "./SVGView";

    let bigMapDiv: HTMLDivElement;
    let svgViewBig: SVGView;

    onMount(() => {
        svgViewBig = new SVGView(bigMapDiv);

        const updateSettledPromise = new Promise<void>((resolve, reject) => {
            regionChangedPubsub.subscribe((data) => {
                svgViewBig.update(data, true).then((_) => resolve());
            });
        });

        updateSettledPromise.then((_) => {
            initialArgsPubsub.subscribe((data) => {
                if (data === undefined) return;
                svgViewBig.applyTransform(data.args);
            });

            miniMapClickPubSub.subscribe((interaction) => {
                if (interaction === undefined) return;
                svgViewBig.centerOnInteractionCoordinates(interaction);
            });

            systemNameSearchPubSub.subscribe((systemSearch) => {
                if (systemSearch === undefined) return;
                svgViewBig.centerOnNode(systemSearch.systemName);
            });

            svgViewBig.addTransformListener(mapDragPubSub);
        });
    });
</script>

<div bind:this={bigMapDiv} id="SVGBigMap" />

<style>
    #SVGBigMap {
        padding: 0.2rem;
        box-sizing: border-box;
        width: 80%;
        height: 100%;
        text-align: center;
        align-self: center;
    }

    :global(#SVGBigMap #SVGRoot) {
        width: 100%;
        height: 100%;
    }

    :global(#SVGBigMap g text) {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: medium;
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

    @media only screen and (max-width: 600px) {
        #SVGBigMap {
            width: 100%;
            height: 95%;
        }
    }
</style>
