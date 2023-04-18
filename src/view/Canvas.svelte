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
	} from "../controller/controller";
	import { writable } from "svelte/store";

	let selectedRegion = "-";
	let regionNames = [];
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
		regionNames: regionNames,
	});

	const init = () => {
		const world = generateGalaxy();
		const cameraProperties = world.cameraSettings;
		const lines = world.lines;
		const points = world.points;
		regionNames = getRegionNames();
		store.set({
			cameraProperties,
			points,
			lines,
			regionNames,
		});
	};

	init();

	function onSelectionChange(selectedRegion: string) {
		const settings = generateRegion(selectedRegion);
		const cameraProperties: PerspectiveCameraProperties =
			settings.cameraSettings;
		const points: Points = settings.points;
		const lines: LineSegments = settings.lines;
		store.set({
			cameraProperties,
			points,
			lines,
			regionNames,
		});
	}
</script>

<div>
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
