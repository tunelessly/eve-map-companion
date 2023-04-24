<script lang="ts">
	import type { PerspectiveCameraProperties } from "@threlte/core";
	import {
		Scene,
		Points,
		LineSegments,
		BufferGeometry,
		PerspectiveCamera,
		WebGLRenderer,
	} from "three";
	import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
	import {
		getRegionNames,
		generateGalaxy,
		generateRegion,
		type WorldSettings,
	} from "../controller/controller.js";
	import { writable } from "svelte/store";
	import { onMount } from "svelte";

	// let selectedRegion = "-";
	// let regionNames = [];
	// let asSubway = false;
	// const store = writable({
	// 	cameraProperties: {},
	// 	points: new Points(
	// 		(() => {
	// 			const a = new BufferGeometry();
	// 			a.computeBoundingSphere();
	// 			return a;
	// 		})()
	// 	),
	// 	lines: new LineSegments(new BufferGeometry()),
	// 	regionNames: regionNames,
	// });

	// const init = () => {
	// 	const settings = generateGalaxy();
	// 	const cameraProperties = settings.cameraSettings;
	// 	const lines = settings.lines;
	// 	const points = settings.points;
	// 	regionNames = getRegionNames();
	// 	store.set({
	// 		cameraProperties,
	// 		points,
	// 		lines,
	// 		regionNames,
	// 	});

	// 	scene = new Scene();
	// 	scene.add(points);
	// 	scene.add(lines);
	// 	camera = new PerspectiveCamera(
	// 		cameraProperties.fov,
	// 		window.innerWidth / window.innerHeight,
	// 		cameraProperties.near,
	// 		cameraProperties.far
	// 	);
	// 	camera.lookAt(points.geometry.boundingSphere.center);
	// 	renderer = new WebGLRenderer();
	// 	renderer.setSize(window.innerWidth, window.innerHeight);
	// 	document.body.appendChild(renderer.domElement);
	// };

	// init();

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

		const renderer = new WebGLRenderer();
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
