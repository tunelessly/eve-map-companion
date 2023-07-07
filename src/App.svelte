<script lang="ts">
    import { onMount } from "svelte";
    import { Galaxy } from "./model/galaxy";
    import { graphDataPubsub, initialArgsPubsub } from "./utils/svelte-store";
    import SVGView from "./view/SVG/SVG.svelte";
    import Search from "./components/Search.svelte";

    let selectedRegion: string;
    let regionNames: string[] = [];

    const update = (regionName: string) => {
        selectedRegion = regionName;
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set("region", regionName);
        history.replaceState({}, "", currentURL.toString());
        Galaxy.instance
            .getDataForRegion(regionName)
            .map((data) => graphDataPubsub.set(data))
            .mapErr(console.error);
    };

    const fromURLSearch = (
        qs: string
    ): {
        region: string;
        args: string;
    } => {
        const params = new URLSearchParams(qs);
        const region = params.get("region") || regionNames[0];
        const args = params.get("args") || "";
        return { region, args };
    };

    onMount(() => {
        regionNames = Galaxy.instance.getAllRegionNames();
        const params = fromURLSearch(window.location.search);
        update(params.region);
        initialArgsPubsub.set({ args: params.args });
    });
</script>

<div>
    <select
        bind:value={selectedRegion}
        on:change={() => update(selectedRegion)}
    >
        {#each regionNames as name}
            <option value={name}>{name}</option>
        {/each}
    </select>
    <Search />
    <SVGView />
</div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }
</style>
