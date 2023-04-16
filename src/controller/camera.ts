import type { PerspectiveCameraProperties } from "@threlte/core";
import type { Vector3 } from "three";


export const getCameraProperties = (center: Vector3, radius: number): PerspectiveCameraProperties => {

    const cameraProperties: PerspectiveCameraProperties = {
        near: 1,
        far: radius * 10,
        fov: 20,
        viewportAware: true,
        inViewport: true,
        useCamera: true,
        position: {
            x: center.x,
            y: center.y - radius * 5,
            z: center.z,
        },
    };

    return cameraProperties;
}