import { generateGeometryData } from "../model/data-generator";
import { pointGeometryFromData, materialFromData } from "./points";
import { lineGeometryFromData } from "./lines";
import { getCameraProperties } from "./camera";
import { Points, type LineSegments } from "three";
import { Vector3 } from "three";
import type { PerspectiveCameraProperties } from "@threlte/core";

export type WorldSettings = {
    points: Points
    lines: LineSegments
    cameraSettings: PerspectiveCameraProperties
}

const magnitude = (x: number): number => {
    return Math.pow(10, Math.floor(Math.log10(x)));
}

export const generateWorld = (): WorldSettings => {
    const { pointPositions, pointColors, linePositions } =
        generateGeometryData();

    const dataMagnitude = pointPositions.reduce((acc, curr) => {
        const m = magnitude(curr);
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

    const pointMaterial = materialFromData(pointGeometry.boundingSphere.radius / (4 * Math.log(pointPositions.length / 3)));
    const points = new Points(pointGeometry, pointMaterial)
    const cameraSettings = getCameraProperties(CenterA, pointGeometry.boundingSphere.radius);

    return { points, lines, cameraSettings };
}