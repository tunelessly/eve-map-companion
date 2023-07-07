import type { IRegionDataCoordinates } from "../model/interfaces";

export interface ViewLike {
    update(data: IRegionDataCoordinates): void;
    dispose(): void;
    destroy(): void;
    onWindowResize(): void;
}