import { getGalaxyGeometryData, getRegionGeometryData, getAllRegionNames } from "../model/galaxy-interface.js";
import { pointGeometryFromData, materialFromData } from "./points.js";
import { lineGeometryFromData } from "./lines.js";
import { getCameraProperties } from "./camera.js";
import { Points, type LineSegments } from "three";
import { Vector3 } from "three";

export type WorldSettings = {
    points: Points
    lines: LineSegments
    cameraSettings: ReturnType<typeof getCameraProperties>
}

const magnitude = (x: number): number => {
    return Math.pow(10, Math.floor(Math.log10(x)));
}

export const getRegionNames = (): string[] => {
    return getAllRegionNames();
}

export const generateGalaxy = (): WorldSettings => {
    const { pointPositions, pointColors, linePositions } =
        getGalaxyGeometryData();
    return data2Geometry(pointPositions, pointColors, linePositions);
}

export const generateRegion = (regionName: string, asSubway: boolean) => {
    const { pointPositions, pointColors, linePositions } = getRegionGeometryData(regionName, true, asSubway);
    return data2Geometry(pointPositions, pointColors, linePositions);
}

const data2Geometry = (pointPositions: number[], pointColors: number[], linePositions: number[][]): WorldSettings => {

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