export interface ViewLike {
    update(regionName: string): void;
    destroy(): void;
    onWindowResize(): void;
}