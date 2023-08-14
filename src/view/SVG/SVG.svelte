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
    import Search from "../../components/Search.svelte";
    import Select from "../../components/Select.svelte";

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
    <div id = "sidebar">
        <div id = "options">
            <Select />
            <Search />
        </div>
        <div bind:this={miniMapDiv} id="SVGMiniMap" />
    </div>

    <div bind:this={bigMapDiv} id="SVGBigMap" />
</div>

<style>
    #SVGRootDiv {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    #sidebar {
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
        justify-content: space-between;
    }

    #options {
        height: fit-content;
        flex-direction: column;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        align-items: baseline;
    }

    #SVGMiniMap {
        width: 100%;
        height: fit-content;
    }

    #SVGBigMap {
        padding: 0.2rem;
        box-sizing: border-box;
        width: 80%;
        height: 100%;
        text-align: center;
        align-self: center;
    }
    
    :global(#SVGRoot) {
        width: 100%;
        height: 100%;
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

    :global(#svg-minimap-rect){
        stroke: rgb(229, 255, 0);
        stroke-width: 10;
        fill: none;
    }


    @media only screen and (max-width: 600px) {
        #SVGRootDiv {
        flex-direction: column;
        }

        #sidebar {
            flex-direction: column;
            width: 100%;
            height: 5%;
            padding: 0.2rem;
        }

        #options {
            flex-direction: row;
            height: 100%;
            padding: 0.5rem 0 0.5rem 0;
            
        }

        #SVGMiniMap {
            visibility: collapse;
        }

        #SVGBigMap {
            width: 100%;
            height: 95%;
        }
    }
</style>
