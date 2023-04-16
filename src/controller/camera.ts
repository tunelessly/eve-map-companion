import type { PerspectiveCameraProperties } from "@threlte/core";
import type { Vector3 } from "three";


export const getCameraProperties = (center: Vector3, radius: number): PerspectiveCameraProperties => {

    const cameraProperties: PerspectiveCameraProperties = {
        near: 0.01,
        far: radius * 20,
        fov: 20,
        viewportAware: true,
        inViewport: true,
        useCamera: true,
        position: {
            x: center.x,
            y: center.y - radius * 6,
            z: center.z,
        },
    };

    return cameraProperties;
}