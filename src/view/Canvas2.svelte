<script lang="ts">
    import { Controller } from "../controller/controller2";
    import { webGLView } from "./view";
    import { Galaxy } from "../model/galaxy";
    import { onMount } from "svelte";
    import eveUniverse from "../model/universe-pretty-1682199656932.json";
    import eveSubway from "../model/region-subway-pretty-1682211913146.json";

    let rootHTMLElement: HTMLElement;
    let selectedRegion: string = "-";
    let regionNames: string[] = [];
    let asSubway: boolean;
    let controller: Controller;

    const changeToRegion = (regionName: string, asSubway: boolean) => {
        controller.displayRegion(regionName, asSubway);
    };

    onMount(() => {
        window.addEventListener("resize", () => {});
        Galaxy.instance.populateGalaxy(eveUniverse);
        Galaxy.instance.populateGalaxySubway(eveSubway);
        const model = Galaxy.instance;
        const view = new webGLView(rootHTMLElement);
        controller = new Controller(model, view);
        controller.displayGalaxy();
        regionNames = controller.getRegionNames();
    });
</script>

<div bind:this={rootHTMLElement}>
    <label>
        <input
            type="checkbox"
            bind:checked={asSubway}
            on:change={() => changeToRegion(selectedRegion, asSubway)}
        />
        View as subway?
    </label>
    <select
        bind:value={selectedRegion}
        on:change={() => changeToRegion(selectedRegion, asSubway)}
    >
        {#each regionNames as name}
            <option value={name}>{name}</option>
        {/each}
    </select>
</div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
