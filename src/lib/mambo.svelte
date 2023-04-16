<script lang="ts">
	import {
		Canvas,
		OrbitControls,
		PerspectiveCamera,
		Three,
	} from "@threlte/core";
	import type { PerspectiveCameraProperties } from "@threlte/core";
	import {
		Points,
		Line,
		BufferGeometry,
		PointsMaterial,
		Float32BufferAttribute,
		LineDashedMaterial,
	} from "three";
	import { generateGeometryData } from "../data/eveData";
	import { onMount } from "svelte";

	const geometry = new BufferGeometry();
	const { positions, colors } = generateGeometryData();
	geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
	geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
	geometry.scale(1000, 1000, 1000);
	geometry.computeBoundingSphere();
	geometry.center();

	let center = geometry.boundingSphere.center;
	let radius = geometry.boundingSphere.radius;
	let arbitraryPointScalingFactor = 25;

	const material = new PointsMaterial({
		size: radius / arbitraryPointScalingFactor,
		vertexColors: true,
	});

	const lineMaterial = new LineDashedMaterial({
		linewidth: 101,
		color: 0x42255e,
		scale: 0.1,
		dashSize: 0.3,
		gapSize: 0.1,
	});

	const cameraProperties: PerspectiveCameraProperties = {
		near: 1,
		far: radius * 10,
		fov: 20,
		viewportAware: true,
		inViewport: true,
		useCamera: true,
		position: {
			x: center.x,
			y: center.y - radius * 5,
			z: center.z,
		},
	};

	let line: Line = new Line(geometry, lineMaterial);
	let points: Points = new Points(geometry, material);
	line.computeLineDistances();
</script>

<div>
	<Canvas>
		<PerspectiveCamera
			{...cameraProperties}
			lookAt={{ x: center.x, y: center.y, z: center.z }}
		>
			<OrbitControls enableZoom={true} />
		</PerspectiveCamera>

		<Three type={line} />
		<Three type={points} />
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
