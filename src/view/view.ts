import { WebGLRenderer, Scene, Camera, PerspectiveCamera, LineSegments, Material } from "three";
import { Points, Vector3, Matrix4 } from "three";
import type { coordinates3D } from "../utils/geometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { pointGeometryFromData, materialFromData } from "./points.js";
import { lineGeometryFromData } from "./lines.js";
import { getCameraProperties } from "./camera.js";

type normalizedRGB = RGB;

type RGB = {
    r: number,
    g: number,
    b: number
}

type HSV = {
    h: number,
    s: number,
    v: number
}

export interface ViewLike {
    update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][],
    ): void;
    dispose(): void;
}

export class webGLView implements ViewLike {
    private _renderer: WebGLRenderer;
    private _scene: Scene;
    private _camera: Camera;
    private _cameraControls: OrbitControls;
    private _scalingFactor: number;
    private _displacement: Vector3;
    private _points: Points;
    private _lines: LineSegments;
    private readonly _rootHTMLElement: HTMLElement;

    constructor(rootHTMLElement: HTMLElement) {
        this._rootHTMLElement = rootHTMLElement;
    }

    get renderer() { return this._renderer };
    get scene() { return this._scene; }
    get camera() { return this._camera; }
    get cameraControls() { return this._cameraControls; }
    get points() { return this._points; }
    get lines() { return this._lines; }
    get scalingFactor() { return this._scalingFactor; }
    get displacement() { return this._displacement; }
    get rootHTMLElement() { return this._rootHTMLElement; }

    public dispose() {
        if (this.lines) {
            this.lines.geometry.dispose();
            this.lines.clear();
            if (this.lines.material instanceof Material) {
                this.lines.material.dispose();
            } else {
                for (let material of this.lines.material) {
                    material.dispose();
                }
            }
        }

        if (this.points) {
            this._points.geometry.dispose();
            this._points.clear();
            if (this.points.material instanceof Material) {
                this.points.material.dispose();
            } else {
                for (let material of this.points.material) {
                    material.dispose();
                }
            }
        }
        if (this.cameraControls) this.cameraControls.dispose();
        if (this.camera) this.camera.clear();
        if (this.scene) this.scene.clear();
        if (this.renderer) this.renderer.dispose();
    }

    private animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };

    public update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][]
    ): any {
        const pointPositions = this.coordinatestoGeometry(systemData.map(x => x[1]));
        const linePositions = this.linestoGeometry(connections);
        const pointColors = this.security2Color(systemData.map(x => x[2]));
        const data = this.data2Geometry(pointPositions, pointColors, linePositions);

        const cameraProperties = data.cameraSettings;
        const lines = data.lines;
        const points = data.points;

        const rect = this.rootHTMLElement.getBoundingClientRect();
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
        const cameraPosition = data.cameraSettings.position;
        camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z
        );
        scene.add(camera);
        const cameraControls = new OrbitControls(camera, renderer.domElement);

        renderer.setSize(width, height);
        const previousRenderer =
            this.rootHTMLElement.getElementsByTagName("canvas")[0];
        if (previousRenderer === undefined) {
            this.rootHTMLElement.appendChild(renderer.domElement);
        } else {
            this.rootHTMLElement.replaceChild(renderer.domElement, previousRenderer);
        }

        this._scene = scene;
        this._camera = camera;
        this._cameraControls = cameraControls;
        this._renderer = renderer;

        this.animate();
    }

    private SystemCoordinates2WorldCoordinates = (systemCoordinates: coordinates3D): Vector3 => {
        const v = new Vector3(systemCoordinates.x, systemCoordinates.z, systemCoordinates.y);
        const t = new Matrix4();
        const s = new Matrix4();
        t.makeTranslation(this.displacement.x, this.displacement.y, this.displacement.z);
        s.makeScale(this.scalingFactor, this.scalingFactor, this.scalingFactor);
        v.applyMatrix4(t);
        v.applyMatrix4(s);
        return v;
    }

    private data2Geometry = (pointPositions: number[], pointColors: number[], linePositions: number[][]) => {

        const dataMagnitude = pointPositions.reduce((acc, curr) => {
            const m = this.magnitude(curr);
            if (m >= acc) {
                return m;
            }
            else {
                return acc;
            }
        }, 1);

        const magnitudeDiffFrom100 = Math.log10(100) - Math.log10(dataMagnitude);
        const scalingFactor = Math.pow(10, magnitudeDiffFrom100);
        console.log(`Data: ${dataMagnitude} Scaling factor: ${scalingFactor}`);

        const pointGeometry = pointGeometryFromData(pointPositions, pointColors);
        pointGeometry.computeBoundingSphere();

        const lines = lineGeometryFromData(linePositions);
        const linesGeometry = lines.geometry;
        linesGeometry.computeBoundingSphere();

        const v0 = pointGeometry.boundingSphere.center;
        const CenterB = new Vector3(v0.x, v0.y, v0.z);
        pointGeometry.center();
        const v1 = pointGeometry.boundingSphere.center;
        const CenterA = new Vector3(v1.x, v1.y, v1.z)
        const diff = new Vector3(
            CenterA.x - CenterB.x,
            CenterA.y - CenterB.y,
            CenterA.z - CenterB.z
        );
        linesGeometry.translate(diff.x, diff.y, diff.z);

        linesGeometry.scale(scalingFactor, scalingFactor, scalingFactor);
        linesGeometry.computeBoundingSphere();
        pointGeometry.scale(scalingFactor, scalingFactor, scalingFactor);
        pointGeometry.computeBoundingSphere();

        this._scalingFactor = scalingFactor;
        this._displacement = diff.clone();

        const pointMaterial = materialFromData(pointGeometry.boundingSphere.radius / (4 * Math.log(pointPositions.length / 3)));
        const points = new Points(pointGeometry, pointMaterial)
        const cameraSettings = getCameraProperties(CenterA, pointGeometry.boundingSphere.radius);

        return { points, lines, cameraSettings };
    }

    private magnitude = (x: number): number => {
        return Math.pow(10, Math.floor(Math.log10(x)));
    }

    private linestoGeometry = (coordinates: [coordinates3D, coordinates3D][]): number[][] => {
        const retVal: number[][] = [];
        for (let coords of coordinates) {
            let originSystem = coords[0];
            let targetSystem = coords[1];
            if (originSystem === undefined && targetSystem === undefined) continue; // TODO
            // Remap the coordinates from sane to OpenGL
            retVal.push([originSystem.x, originSystem.z, originSystem.y]);
            // Remap the coordinates from sane to OpenGL
            retVal.push([targetSystem.x, targetSystem.z, targetSystem.y]);
        }
        return retVal;
    }

    private coordinatestoGeometry = (coordinates: coordinates3D[]): number[] => {
        let retVal: number[] = [];
        for (let coords of coordinates) {
            // Remap the coordinates from sane to OpenGL
            retVal.push(coords.x, coords.z, coords.y);
        }
        return retVal;
    }

    private security2Color = (securityStatuses: number[]): number[] => {
        return securityStatuses
            .map(this.sectoHSV)
            .map(this.HSV2RGB)
            .map(this.RGBtofloat)
            .flatMap(color => [color.r, color.g, color.b]);
    }

    private RGBtofloat = (rgb: RGB): normalizedRGB => {
        return { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 };
    }

    private HSV2RGB = (hsv: HSV): RGB => {
        let s = hsv.s / 100;
        let v = hsv.v / 100;
        let c = v * s;
        let hh = hsv.h / 60;
        let x = c * (1 - Math.abs(hh % 2 - 1));
        let m = v - c;

        var p = Math.round(hh);
        var rgb = (
            p === 0 ? [c, x, 0] :
                p === 1 ? [x, c, 0] :
                    p === 2 ? [0, c, x] :
                        p === 3 ? [0, x, c] :
                            p === 4 ? [x, 0, c] :
                                p === 5 ? [c, 0, x] :
                                    []
        );
        let retVal = {
            r: Math.round(255 * (rgb[0] + m)),
            g: Math.round(255 * (rgb[1] + m)),
            b: Math.round(255 * (rgb[2] + m))
        }
        return retVal;
    }

    private sectoHSV = (securityStatus: number): HSV => {
        // security status is a number that ranges from -1 to 1
        // values less than 0 will be treated as 0

        const mSecurityStatus = securityStatus < 0 ? 0 : securityStatus;

        // By messing around with a color picker that displays HSV
        // alongside RGB I noticed that sec status matches a rotation
        // around the hue-only, starting at cyan and moving towards red.
        // This should roughly correspond to HSV 180/100/100
        // and thus the security status scales the hue between 180 and 0.

        const hue: number = Math.round((180 * mSecurityStatus));
        return { h: hue, s: 100, v: 100 }
    }
}