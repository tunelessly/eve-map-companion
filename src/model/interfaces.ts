export type RegionName = string;
export type ConstellationName = string;
export type SystemName = string;

export interface INode {
    systemName: SystemName;
    solarSystemID: number;
    security: number;
    x: number;
    y: number;
    z: number;
}

export interface IEdgeCoordinates {
    fromName: string;
    fromX: number;
    fromY: number;
    fromZ: number;
    toName: string;
    toX: number;
    toY: number;
    toZ: number;
}

export interface IEdgeIndices {
    source: number;
    target: number;
}

export interface IGroup {
    constellationID: number,
    leaves: number[];
}

export interface ICoordinates3D {
    x: number;
    y: number;
    z: number;
}

export interface IRegionDataCoordinates {
    regionName: string;
    nodes: INode[];
    edges: IEdgeCoordinates[];
    groups: IGroup[];
}

export interface IRegionDataIndices {
    regionName: string;
    nodes: INode[];
    edges: IEdgeIndices[];
    groups: IGroup[];
}