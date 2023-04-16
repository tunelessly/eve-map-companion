import type { PerspectiveCameraProperties } from "@threlte/core";
import type { Vector3 } from "three";


export const getCameraProperties = (): PerspectiveCameraProperties => {

    const cameraProperties: PerspectiveCameraProperties = {
        near: 1,
        far: 10,
        fov: 20,
        viewportAware: true,
        inViewport: true,
        useCamera: true,
        position: {
            x: 0,
            y: 0 - 5,
            z: 0,
        },
    };

    return cameraProperties;
}