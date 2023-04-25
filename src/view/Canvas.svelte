<script lang="ts">
	import { Scene, PerspectiveCamera, WebGLRenderer, Material } from "three";
	// import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
	import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
	import {
		getRegionNames,
		generateGalaxy,
		generateRegion,
		// getSystemWorldCoordinates,
		type WorldSettings,
	} from "../controller/controller.js";
	import { Text } from "troika-three-text";
	import { onMount } from "svelte";

	let scene: Scene;
	let camera: PerspectiveCamera;
	let cameraControls: OrbitControls;
	let renderer: WebGLRenderer;
	let rootHTMLElement: HTMLElement;

	let worldSettings: WorldSettings;
	let selectedRegion = "-";
	let regionNames = [];
	let asSubway = false;

	const setupScene = (settings: WorldSettings) => {
		worldSettings = settings;
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

		// const text = new Text();
		// text.text = "Balas";
		// text.fontSize = points.geometry.boundingSphere.radius / 100;
		// const position = getSystemWorldCoordinates(
		// 	30004261,
		// 	settings.transformationSettings,
		// 	asSubway
		// );
		// console.log(
		// 	`computed position for Balas: ${position.x} ${position.y} ${position.z}`
		// );
		// text.position.x = position.x;
		// text.position.y = position.y;
		// text.position.z = position.z;
		// text.color = 0x9966ff;
		// scene.add(text);

		// const text2 = new Text();
		// text2.text = "Yekh";
		// text2.fontSize = points.geometry.boundingSphere.radius / 100;
		// const position2 = getSystemWorldCoordinates(
		// 	30004265,
		// 	settings.transformationSettings,
		// 	asSubway
		// );
		// console.log(
		// 	`computed position for Yekh: ${position2.x} ${position2.y} ${position2.z}`
		// );
		// text2.position.x = position2.x;
		// text2.position.y = position2.y;
		// text2.position.z = position2.z;
		// text2.color = 0x9966ff;
		// scene.add(text2);

		// const text3 = new Text();
		// text3.text = "Fihrneh";
		// text3.fontSize = points.geometry.boundingSphere.radius / 100;
		// const position3 = getSystemWorldCoordinates(
		// 	30004254,
		// 	settings.transformationSettings,
		// 	asSubway
		// );
		// console.log(
		// 	`computed position for Fihrneh: ${position3.x} ${position3.y} ${position3.z}`
		// );
		// text3.position.x = position3.x;
		// text3.position.y = position3.y;
		// text3.position.z = position3.z;
		// text3.color = 0x9966ff;
		// scene.add(text3);

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
		if (worldSettings !== undefined) {
			worldSettings.lines.geometry.dispose();
			worldSettings.lines.clear();
			if (worldSettings.lines.material instanceof Material) {
				worldSettings.lines.material.dispose();
			} else {
				for (let material of worldSettings.lines.material) {
					material.dispose();
				}
			}
			worldSettings.points.geometry.dispose();
			worldSettings.points.clear();
			if (worldSettings.points.material instanceof Material) {
				worldSettings.points.material.dispose();
			} else {
				for (let material of worldSettings.points.material) {
					material.dispose();
				}
			}
		}
		if (cameraControls !== undefined) cameraControls.dispose();
		if (camera !== undefined) camera.clear();
		if (scene !== undefined) scene.clear();
		if (renderer !== undefined) renderer.dispose();

		({ renderer, scene, camera, cameraControls } = setupScene(settings));
		animate();
	};

	const changeToRegion = (selectedRegion: string) => {
		if (selectedRegion == "-") return;
		restartRender(generateRegion(selectedRegion, asSubway));
	};

	onMount(() => {
		window.addEventListener("resize", () => {
			const rect = rootHTMLElement.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();

			renderer.setSize(width, height);
			renderer.render(scene, camera);
		});

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
