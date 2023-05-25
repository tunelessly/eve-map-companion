export type RegionName = string;
export type ConstellationName = string;
export type SystemName = string;

export interface ISolarSystem {
    systemName: SystemName;
    security: number;
    x: number;
    y: number;
    z: number;
    links: SystemName[];
}

export interface IConstellation {
    constellationName: ConstellationName;
    systems: ISolarSystem[];
}

export interface IRegion {
    regionName: RegionName;
    constellations: IConstellation[];
}

export interface IEvEUniverse {
    regions: IRegion[];
}