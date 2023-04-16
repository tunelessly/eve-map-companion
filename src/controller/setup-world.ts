import { generateGeometryData } from "../data/eveData";
import { pointGeometryFromData } from "./points";
import { lineGeometryFromData } from "./lines";
import { getCameraProperties } from "./camera";
import type { Points, LineSegments } from "three";
import { Vector3 } from "three";
import type { PerspectiveCameraProperties } from "@threlte/core";

export type WorldSettings = {
    points: Points
    lines: LineSegments
    cameraSettings: PerspectiveCameraProperties
}

export const generateWorld = (): WorldSettings => {
    const { pointPositions, pointColors, linePositions } =
        generateGeometryData();

    const points = pointGeometryFromData(pointPositions, pointColors);
    const pointsGeometry = points.geometry;
    const v0 = pointsGeometry.boundingSphere.center;
    const CenterB = new Vector3(v0.x, v0.y, v0.z);
    pointsGeometry.center();
    const v1 = pointsGeometry.boundingSphere.center;
    const CenterA = new Vector3(v1.x, v1.y, v1.z)
    const diff = new Vector3(
        CenterA.x - CenterB.x,
        CenterA.y - CenterA.y,
        CenterA.z - CenterB.z
    );

    const lines = lineGeometryFromData(linePositions);
    const linesGeometry = lines.geometry;
    linesGeometry.translate(diff.x, diff.y, diff.z);

    const cameraSettings = getCameraProperties(CenterA, pointsGeometry.boundingSphere.radius);
    return { points, lines, cameraSettings };
}