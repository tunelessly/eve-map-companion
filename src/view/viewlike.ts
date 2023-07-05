import type { INode, IEdge } from "../model/interfaces";

export interface ViewLike {
    update(
        systemData: INode[],
        connections: IEdge[],
    ): void;
    dispose(): void;
    destroy(): void;
    onWindowResize(): void;
}