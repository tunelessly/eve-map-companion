<script lang="ts">
    import { onMount } from "svelte";
    import { Galaxy } from "./model/galaxy";
    import { Result } from "neverthrow";
    import { graphDataPubsub, initialArgsPubsub } from "./utils/svelte-store";
    import SVGView from "./view/SVG/SVG.svelte";
    import Search from "./components/Search.svelte";
    import eveUniverse from "./model/universe_pretty_1685042923612.json";
    import eveSubway from "./model/region-subway-pretty-1685837603243.json";

    let selectedRegion: string;
    let regionNames: string[] = [];

    const update = (regionName: string) => {
        selectedRegion = regionName;
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set("region", regionName);
        history.replaceState({}, "", currentURL.toString());
        const systemDataResult =
            Galaxy.instance.getRegionCoordinatesandStatuses(regionName, true);
        const connectionsResult = Galaxy.instance.getConnections(
            regionName,
            true
        );
        Result.combine([systemDataResult, connectionsResult])
            .map((data) => {
                const systemData = data[0];
                const connectionData = data[1];
                graphDataPubsub.set({
                    nodeData: systemData,
                    edgeData: connectionData,
                });
            })
            .mapErr(console.log);
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
