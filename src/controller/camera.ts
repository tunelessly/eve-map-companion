import type { PerspectiveCameraProperties } from "@threlte/core";
import type { Vector3 } from "three";


export const getCameraProperties = (center: Vector3, radius: number): PerspectiveCameraProperties => {

    console.log(`Bounding sphere radius: ${radius}`);
    const cameraProperties: PerspectiveCameraProperties = {
        near: 0.01,
        far: radius * 20,
        fov: 20,
        viewportAware: true,
        inViewport: true,
        useCamera: true,
        position: {
            x: center.x,
            y: center.y,
            z: center.z + radius * 6,
        },
    };

    return cameraProperties;
}