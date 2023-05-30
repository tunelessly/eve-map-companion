<script lang="ts">
    import { onMount } from "svelte";
    import { Galaxy } from "./model/galaxy";
    import { Result } from "neverthrow";
    import SVGView from "./view/SVG/SVG.svelte";
    import Search from "./components/search.svelte";
    import eveUniverse from "./model/universe_pretty_1685042923612.json";
    import eveSubway from "./model/region-subway-pretty-1685057970581.json";

    let selectedRegion: string;
    let regionNames: string[] = [];
    let systemDataResult;
    let connectionsResult;
    let systemData;
    let connectionData;
    let args = "";
    $: selectedRegion;
    $: systemData;
    $: connectionData;
    $: args;

    const update = (regionName: string) => {
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set("region", regionName);
        history.replaceState({}, "", currentURL.toString());
        selectedRegion = regionName;
        systemDataResult = Galaxy.instance.getRegionCoordinatesandStatuses(
            regionName,
            true
        );
        connectionsResult = Galaxy.instance.getConnections(regionName, true);
        Result.combine([systemDataResult, connectionsResult])
            .map((data) => {
                systemData = data[0];
                connectionData = data[1];
            })
            .mapErr(console.log);
        args = "";
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
        Galaxy.instance.populateGalaxy(eveUniverse);
        Galaxy.instance.populateGalaxyAsSubway(eveSubway);
        regionNames = Galaxy.instance.getAllRegionNames();
        const params = fromURLSearch(window.location.search);
        update(params.region);
        args = params.args;
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
    <SVGView {systemData} {connectionData} transform={args} />
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
