<script lang="ts">
    import { onMount } from "svelte";
    import {
        regionChangedPubsub,
        initialArgsPubsub,
    } from "../utils/svelte-store";
    import { regions } from "../utils/regions";

    let selectedRegion: string;
    let regionNames: string[] = [];

    const update = (regionName: string) => {
        selectedRegion = regionName;
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set("region", regionName);
        history.replaceState({}, "", currentURL.toString());
        regionChangedPubsub.set(regionName);
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
        regionNames = regions;
        const params = fromURLSearch(window.location.search);
        update(params.region);
        initialArgsPubsub.set({ args: params.args });
    });
</script>


<select
    bind:value={selectedRegion}
    on:change={() => update(selectedRegion)}
>
    {#each regionNames as name}
        <option value={name}>{name}</option>
    {/each}
</select>

<style>
    select {
        width: 68%;
        text-align: center;
        padding: 0.05rem 0rem 0.05rem 0rem;
        box-sizing: border-box;
    }
</style>