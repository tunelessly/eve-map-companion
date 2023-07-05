export type RegionName = string;
export type ConstellationName = string;
export type SystemName = string;

export interface INode {
    systemName: SystemName;
    security: number;
    x: number;
    y: number;
    z: number;
}

export interface IEdge {
    fromX: number;
    fromY: number;
    fromZ: number;
    toX: number;
    toY: number;
    toZ: number;
}

export interface ICoordinates3D {
    x: number;
    y: number;
    z: number;
}