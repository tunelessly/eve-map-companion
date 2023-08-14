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
    let svgViewBig: SVGView;


    systemNameSearchPubSub.subscribe((systemSearch) => {
        if (svgViewBig === undefined) return;
        svgViewBig.centerOnNode(systemSearch.systemName);
    });

    mapClickPubSub.subscribe((coordinates) => {
        if (svgViewBig === undefined) return;
        // TODO: this might cause the history api to bitch
        // depending on the frequency of events.
        // Needs a refactor
        svgViewBig.centerOnCoords(coordinates.x, coordinates.y);
    });

    regionChangedPubsub.subscribe((data) => {
        if (svgViewBig === undefined) return;
        svgViewBig.update(data, true);
    });

    initialArgsPubsub.subscribe((data) => {
        if (svgViewBig === undefined) return;
        // svgViewBig.applyTransform(data.args);
    });

    onMount(() => {
        svgViewBig = new SVGView(bigMapDiv);
        svgViewBig.addTransformListener(mapDragPubSub);
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
    

    @media only screen and (max-width: 600px) {
        
        #SVGBigMap {
            width: 100%;
            height: 95%;
        }
    }
</style>
