import type { coordinates3D } from "../model/galaxy";

export interface ViewLike {
    update(
        systemData: [string, coordinates3D, number][],
        connections: [coordinates3D, coordinates3D][],
    ): void;
    dispose(): void;
    destroy(): void;
    onWindowResize(): void;
}