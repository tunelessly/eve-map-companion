export type RegionName = string;
export type ConstellationName = string;
export type SystemName = string;

export interface ISolarSystem {
    systemName: SystemName;
    security: number;
    x: number;
    y: number;
    z: number;
}

export interface IConstellation {
    constellationName: ConstellationName;
    systems: ISolarSystem[];
}

export interface IRegion {
    regionName: RegionName;
    constellations: IConstellation[];
}

export interface IJumps {
    from: SystemName;
    to: SystemName;
}

export interface IEvEUniverse {
    regions: IRegion[];
    jumps: IJumps[];
}