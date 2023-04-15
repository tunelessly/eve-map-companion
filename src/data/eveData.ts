import eveUniverse from './universe-pretty.json';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry, type coordinates3D } from '../utils/geometry';
import { Color } from 'three';

class Galaxy {
    private readonly _name: String = "New Eden";
    private readonly _regions: Record<string, Region>;

    constructor(regions = {}) {
        this._regions = regions;
    }

    public addRegion(region: Region): void {
        this._regions[region.name] = region;
    }

    public getRegion(regionID: string): Region | undefined {
        return this._regions[regionID];
    }

    get regions() {
        return this._regions;
    }

}

class Region {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _systems: Record<number, System>;

    constructor(id, name, systems = {}) {
        this._id = id;
        this._name = name;
        this._systems = systems;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get systems() {
        return this._systems;
    }

    public addSystem(system: System): void {
        this._systems[system.id] = system;
    }

    public getSystem(systemID: number): System | undefined {
        return this._systems[systemID];
    }
}

class System {
    public readonly coordinates: coordinates3D;
    public readonly securityStatus: number;
    public readonly name: string;
    public readonly id: number;
    public readonly region: string;
    private readonly _links: number[]

    constructor(coordinates, securityStatus, region, id, name, links = []) {
        this.coordinates = coordinates;
        this.securityStatus = securityStatus;
        this.region = region;
        this.id = id;
        this.name = name;
        this._links = links;
    }

    public addLink(systemID): void {
        this._links.push[systemID];
    }

    get links() {
        return this._links;
    }
}

const createGraph = () => {
    const galaxy = new Galaxy();

    for (let regionID in eveUniverse.regions) {
        let regionName = eveUniverse.regions[regionID];
        let region = new Region(regionID, regionName);
        galaxy.addRegion(region)
    }

    for (let s of eveUniverse.solarSystems) {
        let system = new System(
            { x: s.x, y: s.y, z: s.z },
            s.security,
            s.region,
            s.id,
            s.name
        );
        galaxy.getRegion(system.region).addSystem(system);
    }

    for (let jump of eveUniverse.jumps) {
        let candidate: System;
        for (let regionID in galaxy.regions) {
            let system = galaxy.getRegion(regionID).getSystem(jump.from);
            if (system === undefined) {
                continue;
            }
            else {
                candidate = system;
                break;
            }
        }
        candidate?.addLink(jump.to);
    }

    Object.keys(galaxy.regions).forEach(regionName => {
        console.log(`Region: ${regionName}`);
        Object.keys(galaxy.getRegion(regionName).systems).forEach(systemName => {
            console.log(`\t${systemName}`);
        });
    });

}

export const generateGeometryData = () => {
    // createGraph();
    const coordinates: coordinates3D[] = [];
    const colors: number[] = [];
    const color = new Color();
    const permissibleRegion = "Aridia";

    for (let system of eveUniverse.solarSystems) {
        if (system.region != permissibleRegion) continue;


        let systemColorRGB = HSV2RGB(sectoHSV(system.security));
        let coordinates3D = { x: system.x, y: system.y, z: system.z };
        let transformedColors = RGBtofloat(systemColorRGB);
        coordinates.push(coordinates3D);
        color.setRGB(transformedColors.r, transformedColors.g, transformedColors.b);
        colors.push(color.r, color.g, color.b);
    }
    let positions = coordinatestoGeometry(coordinates);

    return { positions, colors };
};