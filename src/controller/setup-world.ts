import { generateGeometryData } from "../data/eveData";
import { pointGeometryFromData } from "./points";
import { lineGeometryFromData } from "./lines";
import { getCameraProperties } from "./camera";
import type { Points, LineSegments, Sphere } from "three";
import type { PerspectiveCameraProperties } from "@threlte/core";

export type WorldSettings = {
    points: Points
    lines: LineSegments
    cameraSettings: PerspectiveCameraProperties
    boundingSphere: Sphere
}

export const generateWorld = (): WorldSettings => {
    const { pointPositions, pointColors, linePositions } =
        generateGeometryData();

    const [points, boundingSphere] = pointGeometryFromData(pointPositions, pointColors);
    const lines = lineGeometryFromData(linePositions);
    const cameraSettings = getCameraProperties(boundingSphere.center, boundingSphere.radius);

    return { points, lines, cameraSettings, boundingSphere }
}