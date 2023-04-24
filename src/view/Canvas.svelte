<script lang="ts">
	import { Scene, PerspectiveCamera, WebGLRenderer, Color } from "three";
	import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
	import {
		getRegionNames,
		generateGalaxy,
		generateRegion,
		type WorldSettings,
	} from "../controller/controller.js";
	import { onMount } from "svelte";

	let scene: Scene;
	let camera: PerspectiveCamera;
	let cameraControls: OrbitControls;
	let renderer: WebGLRenderer;
	let rootHTMLElement: HTMLElement;

	let selectedRegion = "-";
	let regionNames = [];
	let asSubway = false;

	const setupScene = (settings: WorldSettings) => {
		const cameraProperties = settings.cameraSettings;
		const lines = settings.lines;
		const points = settings.points;

		const rect = rootHTMLElement.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		const renderer = new WebGLRenderer({ alpha: true });
		const scene = new Scene();
		const camera = new PerspectiveCamera(
			cameraProperties.fov,
			width / height,
			cameraProperties.near,
			cameraProperties.far
		);

		scene.add(points);
		scene.add(lines);

		camera.lookAt(points.geometry.boundingSphere.center);
		const cameraPosition = settings.cameraSettings.position;
		camera.position.set(
			cameraPosition.x,
			cameraPosition.y,
			cameraPosition.z
		);
		scene.add(camera);
		cameraControls = new OrbitControls(camera, renderer.domElement);

		renderer.setSize(width, height);
		const previousRenderer =
			rootHTMLElement.getElementsByTagName("canvas")[0];
		if (previousRenderer === undefined) {
			rootHTMLElement.appendChild(renderer.domElement);
		} else {
			rootHTMLElement.replaceChild(renderer.domElement, previousRenderer);
		}

		return {
			renderer,
			scene,
			camera,
			cameraControls,
		};
	};

	const restartRender = (settings: WorldSettings): void => {
		({ renderer, scene, camera, cameraControls } = setupScene(settings));
		animate();
	};

	const changeToRegion = (selectedRegion: string) => {
		if (selectedRegion == "-") return;
		restartRender(generateRegion(selectedRegion, asSubway));
	};

	onMount(() => {
		regionNames = getRegionNames();
		restartRender(generateGalaxy());
	});

	const animate = () => {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	};
</script>

<div bind:this={rootHTMLElement}>
	<label>
		<input
			type="checkbox"
			bind:checked={asSubway}
			on:change={() => changeToRegion(selectedRegion)}
		/>
		View as subway?
	</label>
	<select
		bind:value={selectedRegion}
		on:change={() => changeToRegion(selectedRegion)}
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
