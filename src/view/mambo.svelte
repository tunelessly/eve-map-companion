<script lang="ts">
	import {
		Canvas,
		OrbitControls,
		type PerspectiveCameraProperties,
		PerspectiveCamera,
		Three,
	} from "@threlte/core";
	import { Points, LineSegments, BufferGeometry } from "three";
	import { generateWorld } from "../controller/controller";
	import { writable } from "svelte/store";

	const init = () => {
		const world = generateWorld();
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
	});

	function generateCanvas() {
		let cameraProperties: PerspectiveCameraProperties;
		let points: Points;
		let lines: LineSegments;
		({ cameraProperties, points, lines } = init());
		store.set({
			cameraProperties,
			points,
			lines,
		});
	}
</script>

<div>
	<button on:click={generateCanvas}> Click for space magic! </button>
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
