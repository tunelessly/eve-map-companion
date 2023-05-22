import type { coordinates3D } from "../../model/galaxy";
import type { ViewLike } from "../viewlike";

export class DummyView implements ViewLike {
    constructor(rootHTMLElement: HTMLElement) { }

    public update(systemData: [string, coordinates3D, number][], connections: [coordinates3D, coordinates3D][]): void { }
    public destroy(): void { }
    public dispose(): void { }
    public onWindowResize(): void { }
}