<script lang="ts">
  console.log = import.meta.env.DEV ? console.log : () => {};
  import { Controller } from "./controller/controller";
  import { webGLView } from "./view/webGL/webGL";
  import { CSS3DView } from "./view/css3D/css3D";
  import { Galaxy } from "./model/galaxy";
  import { onMount } from "svelte";
  import eveUniverse from "./model/universe-pretty-1682199656932.json";
  import eveSubway from "./model/region-subway-pretty-1682211913146.json";
  import { d3View } from "./view/d3/d3View";

  let rootHTMLElement: HTMLElement;
  let selectedRegion: string = "-";
  let regionNames: string[] = [];
  let asSubway: boolean;
  let controller: Controller;

  const changeToRegion = (regionName: string, asSubway: boolean) => {
    if (selectedRegion == "-") return;
    if (asSubway) {
      console.log("SVG");
      controller.changeView(new d3View(rootHTMLElement));
    } else {
      console.log("WebGL");
      controller.changeView(new webGLView(rootHTMLElement));
    }
    controller.displayRegion(regionName, asSubway);
  };

  onMount(() => {
    Galaxy.instance.populateGalaxy(eveUniverse);
    Galaxy.instance.populateGalaxySubway(eveSubway);
    const model = Galaxy.instance;
    const view = new webGLView(rootHTMLElement);
    controller = new Controller(model, view);
    controller.displayGalaxy();
    regionNames = controller.getRegionNames();
    window.addEventListener("resize", () => view.onWindowResize());
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
