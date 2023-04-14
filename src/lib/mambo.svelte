<script lang="ts">
	import { Canvas, OrbitControls, T, PerspectiveCamera } from "@threlte/core";
	import type { PerspectiveCameraProperties } from "@threlte/core";
	import {
		BufferGeometry,
		PointsMaterial,
		Float32BufferAttribute,
	} from "three";
	import generateGeometryData from "../data/eveData";

	const geometry = new BufferGeometry();
	const material = new PointsMaterial({ size: 10, vertexColors: true });
	const { positions, colors } = generateGeometryData();
	geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
	geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
	geometry.scale(1000, 1000, 1000);
	geometry.computeBoundingSphere();
	geometry.center();

	let center = geometry.boundingSphere.center;

	const cameraProperties: PerspectiveCameraProperties = {
		near: 1,
		far: geometry.boundingSphere.radius * 10,
		fov: 20,
		viewportAware: true,
		inViewport: true,
		useCamera: true,
		position: {
			x: center.x,
			y: center.y - geometry.boundingSphere.radius * 5,
			z: center.z,
		},
	};
</script>

<div>
	<Canvas>
		<PerspectiveCamera
			{...cameraProperties}
			lookAt={{ x: center.x, y: center.y, z: center.z }}
		>
			<OrbitControls enableZoom={true} />
		</PerspectiveCamera>

		<T.Points {geometry} {material} />
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
