<script lang="ts">
	import {
		Canvas,
		OrbitControls,
		type PerspectiveCameraProperties,
		PerspectiveCamera,
		Three,
	} from "@threlte/core";
	import { Points, LineSegments, BufferGeometry } from "three";
	import {
		getRegionNames,
		generateGalaxy,
		generateRegion,
		type WorldSettings,
	} from "../controller/controller";
	import { writable } from "svelte/store";

	const init = () => {
		const world = generateGalaxy();
		const cameraProperties = world.cameraSettings;
		const lines = world.lines;
		const points = world.points;
		return { cameraProperties, lines, points };
	};

	const store = writable({
		cameraProperties: {},
		points: new Points(
			(() => {
				const a = new BufferGeometry();
				a.computeBoundingSphere();
				return a;
			})()
		),
		lines: new LineSegments(new BufferGeometry()),
		regionNames: [],
	});

	function generateCanvas() {
		let cameraProperties: PerspectiveCameraProperties;
		let points: Points;
		let lines: LineSegments;
		let regionNames: string[] = getRegionNames();
		console.dir(regionNames);
		({ cameraProperties, points, lines } = init());
		store.set({
			cameraProperties,
			points,
			lines,
			regionNames,
		});
	}

	let selectedRegion = "-";
	function onSelectionChange(selectedRegion: string) {
		const settings = generateRegion(selectedRegion);
		const cameraProperties: PerspectiveCameraProperties =
			settings.cameraSettings;
		const points: Points = settings.points;
		const lines: LineSegments = settings.lines;
		const regionNames: string[] = getRegionNames();
		console.dir(regionNames);
		store.set({
			cameraProperties,
			points,
			lines,
			regionNames,
		});
	}
</script>

<div>
	<button on:click={generateCanvas}> Click for space magic! </button>
	<select
		bind:value={selectedRegion}
		on:change={() => onSelectionChange(selectedRegion)}
	>
		{#each $store.regionNames as name}
			<option value={name}>{name}</option>
		{/each}
	</select>
	<Canvas>
		<PerspectiveCamera
			{...$store.cameraProperties}
			lookAt={$store.points.geometry.boundingSphere.center}
		>
			<OrbitControls enableZoom={true} />
		</PerspectiveCamera>

		<Three type={$store.lines} />
		<Three type={$store.points} />
	</Canvas>
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
