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
    pointsGeometry.computeBoundingSphere();
    const pointsCenterOriginal = pointsGeometry.boundingSphere.center.clone();
    pointsGeometry.center();
    const pointsCenterAfter = pointsGeometry.boundingSphere.center.clone();
    const diff = pointsCenterAfter.sub(pointsCenterOriginal);



    const lines = lineGeometryFromData(linePositions);
    const linesGeometry = lines.geometry;
    linesGeometry.translate(diff.x, diff.y, diff.z);



    const cameraSettings = getCameraProperties(pointsCenterAfter, pointsGeometry.boundingSphere.radius);

    return { points, lines, cameraSettings };
}