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
		LineSegments,
		BufferGeometry,
		PointsMaterial,
		Float32BufferAttribute,
		LineDashedMaterial,
		Vector3,
	} from "three";
	import { generateGeometryData } from "../data/eveData";

	const { pointPositions, pointColors, linePositions } =
		generateGeometryData();
	const pointGeometry = new BufferGeometry();
	const lineGeometry = new BufferGeometry();

	const putaquepariu = linePositions.map((x) => new Vector3(...x));
	lineGeometry.setFromPoints(putaquepariu);
	lineGeometry.scale(1000, 1000, 1000);
	lineGeometry.computeBoundingSphere();
	lineGeometry.center();

	pointGeometry.setAttribute(
		"position",
		new Float32BufferAttribute(pointPositions, 3)
	);
	pointGeometry.setAttribute(
		"color",
		new Float32BufferAttribute(pointColors, 3)
	);
	pointGeometry.scale(1000, 1000, 1000);
	pointGeometry.boundingSphere = lineGeometry.boundingSphere;
	pointGeometry.center();

	let center = pointGeometry.boundingSphere.center;
	let radius = pointGeometry.boundingSphere.radius;
	let arbitraryPointScalingFactor = 25;

	const pointMaterial = new PointsMaterial({
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

	let line: LineSegments = new LineSegments(lineGeometry, lineMaterial);
	let points: Points = new Points(pointGeometry, pointMaterial);
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
