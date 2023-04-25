import type { coordinates3D } from "../../model/galaxy";
import type { ViewLike } from "../viewlike";
import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import { Matrix4, PerspectiveCamera, Scene, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class CSS3DView implements ViewLike {

    private readonly _rootHTMLElement: HTMLElement;
    private _camera: PerspectiveCamera;
    private _cameraControls: OrbitControls;
    private _scene: Scene;
    private _renderer: CSS3DRenderer;
    private _scalingFactor: number;

    private get rootHTMLElement() { return this._rootHTMLElement; }
    private get camera() { return this._camera; }
    private get scene() { return this._scene; }
    private get renderer() { return this._renderer; }
    private get cameraControls() { return this._cameraControls };

    constructor(rootHTMLElement: HTMLElement) {
        this._rootHTMLElement = rootHTMLElement;
    }

    public dispose() { }

    public onWindowResize() {
        const rect = this.rootHTMLElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    public update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][]
    ) {

        const dataMagnitude = systemData.flatMap(x => [x[1].x, x[1].y, x[1].z]).reduce((acc, curr) => {
            const m = this.magnitude(curr);
            if (m >= acc) {
                return m;
            }
            else {
                return acc;
            }
        }, 1);

        const magnitudeDiffFrom1000 = Math.log10(1000) - Math.log10(dataMagnitude);
        const scalingFactor = Math.pow(10, magnitudeDiffFrom1000);
        console.log(`Data: ${dataMagnitude} Scaling factor: ${scalingFactor}`);
        this._scalingFactor = scalingFactor;
        const rect = this.rootHTMLElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const camera = new PerspectiveCamera(
            20, width / height, 0.1, 10000
        );
        const scene = new Scene();
        const renderer = new CSS3DRenderer();
        const cameraControls = new OrbitControls(camera, renderer.domElement);
        renderer.setSize(width, height);

        for (let data of systemData) {
            const obj = this.makeThing(data[0], data[1]);
            scene.add(obj);
        }


        const previousRenderer =
            this.rootHTMLElement.getElementsByTagName(renderer.domElement.tagName)[0];
        if (previousRenderer === undefined) {
            this.rootHTMLElement.appendChild(renderer.domElement);
        } else {
            this.rootHTMLElement.replaceChild(renderer.domElement, previousRenderer);
        }

        camera.position.z = 1000;
        camera.lookAt(0, 0, 0);
        scene.add(camera);

        this.rootHTMLElement.appendChild(renderer.domElement)
        this._scene = scene;
        this._camera = camera;
        this._renderer = renderer;
        this._cameraControls = cameraControls;

        this.animate();

    }

    private makeThing = (text: string, coordinates: coordinates3D): CSS3DObject => {
        const div = document.createElement('div');
        div.className = "system";
        div.style.width = "120px";
        div.style.height = "160px";
        div.style.boxShadow = "0px 0px 12px rgba(0, 255, 255, 0.5)";
        div.style.border = "border: 1px solid rgba(127, 255, 255, 0.25)";
        div.style.fontFamily = "Helvetica, sans-serif";
        div.style.textAlign = "center";
        div.style.lineHeight = "normal";
        div.style.cursor = "default";
        div.style.backgroundColor = "rgba(0,127,127," + (Math.random() * 0.5 + 0.25) + ")";
        div.textContent = text;

        const coordinatesVector = new Vector3(coordinates.x, coordinates.y, coordinates.z);
        const s = new Matrix4();
        s.makeScale(this._scalingFactor, this._scalingFactor, this._scalingFactor);
        coordinatesVector.applyMatrix4(s);

        const objCSS = new CSS3DObject(div);
        objCSS.position.x = coordinatesVector.x;
        objCSS.position.y = coordinatesVector.z;
        objCSS.position.z = coordinatesVector.y;

        return objCSS;
    }

    private magnitude = (x: number): number => {
        return Math.pow(10, Math.floor(Math.log10(x)));
    }

    private animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };



}