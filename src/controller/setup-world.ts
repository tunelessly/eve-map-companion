import { generateGeometryData } from "../data/eveData";
import { pointGeometryFromData } from "./points";
import { lineGeometryFromData } from "./lines";
import { getCameraProperties } from "./camera";
import type { Points, LineSegments } from "three";
import { Group } from "three";
import type { PerspectiveCameraProperties } from "@threlte/core";

export type WorldSettings = {
    points: Points
    lines: LineSegments
    cameraSettings: PerspectiveCameraProperties
}

export const generateWorld = (): WorldSettings => {
    const { pointPositions, pointColors, linePositions } =
        generateGeometryData();

    const group = new Group();
    const points = pointGeometryFromData(pointPositions, pointColors);
    const lines = lineGeometryFromData(linePositions);
    group.add(lines);
    group.add(points);
    const cameraSettings = getCameraProperties();

    return { points, lines, cameraSettings }
}