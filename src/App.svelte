<script lang="ts">
  console.log = import.meta.env.DEV ? console.log : () => {};
  import { Controller } from "./controller/controller";
  import type { ViewLike } from "./view/viewlike";
  import { webGLView } from "./view/webGL/webGL";
  import { SVGView } from "./view/SVG/SVGView";
  import { Galaxy } from "./model/galaxy";
  import { onMount } from "svelte";
  import eveUniverse from "./model/universe-pretty-1682199656932.json";
  import eveSubway from "./model/region-subway-pretty-1684786151391.json";

  let rootHTMLElement: HTMLElement;
  let selectedRegion: string = "-";
  let regionNames: string[] = [];
  let asSubway: boolean = false;
  $: asSubway;
  $: selectedRegion;
  let controller: Controller;

  const changeToRegion = (regionName: string, asSubway: boolean) => {
    if (selectedRegion == "-") {
      return;
    } else if (selectedRegion === Galaxy.instance.name) {
      const view = new webGLView(rootHTMLElement);
      controller.changeView(view);
      controller.displayGalaxy();
      return;
    }

    if (asSubway) {
      console.log("SVG");
      const view = new SVGView(rootHTMLElement);
      controller.changeView(view);
    } else {
      console.log("WebGL");
      const view = new webGLView(rootHTMLElement);
      controller.changeView(view);
    }
    controller.displayRegion(regionName, asSubway);
  };

  const fromURLSearch = (
    qs: string
  ): {
    view: ViewLike;
    region: string;
    asSubway: boolean;
  } => {
    const params = new URLSearchParams(qs);
    const region = params.get("region");
    const asSubway = params.get("subway") === "true";
    let view: ViewLike;
    if (
      region !== undefined &&
      region !== Galaxy.instance.name &&
      asSubway !== undefined
    ) {
      console.log("Parsed url with params", region, asSubway);
      if (asSubway) view = new SVGView(rootHTMLElement);
      else view = new webGLView(rootHTMLElement);
    } else {
      view = new webGLView(rootHTMLElement);
    }
    return { view, region, asSubway };
  };

  onMount(() => {
    Galaxy.instance.populateGalaxy(eveUniverse);
    Galaxy.instance.populateGalaxySubway(eveSubway);
    if (window.location.search.length > 0) {
      const model = Galaxy.instance;
      const params = fromURLSearch(window.location.search);
      asSubway = params.asSubway;
      selectedRegion = params.region;
      controller = new Controller(model, params.view);
      if (params.region === Galaxy.instance.name) {
        controller.displayGalaxy();
      } else {
        controller.displayRegion(params.region, params.asSubway);
      }
    } else {
      const model = Galaxy.instance;
      const view = new webGLView(rootHTMLElement);
      controller = new Controller(model, view);
      controller.displayGalaxy();
    }
    regionNames = [Galaxy.instance.name].concat(controller.getRegionNames());
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
