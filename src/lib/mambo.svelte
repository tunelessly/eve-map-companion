<script lang="ts">
	import {
		Canvas,
		OrbitControls,
		PerspectiveCamera,
		Three,
	} from "@threlte/core";

	import { generateWorld } from "../controller/setup-world";

	const world = generateWorld();
	const cameraProperties = world.cameraSettings;
	const center = world.boundingSphere.center;
	const line = world.lines;
	const points = world.points;
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
