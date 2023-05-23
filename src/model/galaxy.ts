import type * as interfaces from './interfaces';
import { ok, err, Result } from "neverthrow";
import * as d3 from "d3";
import * as cola from "webcola";

export type coordinates3D = {
    x: number;
    y: number;
    z: number;
}

class SolarSystem implements interfaces.ISolarSystem {
    private readonly _systemName: interfaces.SystemName;
    private readonly _security: number;
    private readonly _x: number;
    private readonly _y: number;
    private readonly _z: number;
    private readonly _links: interfaces.SystemName[];

    constructor(data: interfaces.ISolarSystem, links = []) {
        this._systemName = data.systemName;
        this._security = data.security;
        this._x = data.x;
        this._y = data.y;
        this._z = data.z;
        this._links = links;
    }

    public get systemName() { return this._systemName; }
    public get security() { return this._security; }
    public get x() { return this._x; }
    public get y() { return this._y; }
    public get z() { return this._z; }
    public get links() { return this._links; }

    public addLink(systemName: interfaces.SystemName) {
        this._links.push(systemName);
    }
}

class Constellation implements interfaces.IConstellation {
    private readonly _constellationName: interfaces.ConstellationName;
    private readonly _systems: SolarSystem[];

    constructor(data: interfaces.IConstellation) {
        this._constellationName = data.constellationName;

        const systems = [];
        for (let s of data.systems) {
            const system = new SolarSystem(s);
            systems.push(system);
        }
        this._systems = systems;
    }

    public get constellationName() { return this._constellationName; }
    public get systems() { return this._systems; }
}

class Region implements interfaces.IRegion {
    private readonly _regionName: interfaces.RegionName;
    private readonly _constellations: Constellation[];
    private _systems: Record<interfaces.SystemName, SolarSystem> = {};

    constructor(data: interfaces.IRegion) {
        this._regionName = data.regionName;

        const constellations = [];
        for (let c of data.constellations) {
            const constellation = new Constellation(c);
            constellations.push(constellation);

            constellation.systems.forEach(system => {
                this.systems[system.systemName] = system;
            });
        }
        this._constellations = constellations;
    }

    public get regionName() { return this._regionName };
    public get constellations() { return this._constellations };
    public get systems() { return this._systems };
}

export class Galaxy {
    private static readonly _name: string = "New Eden";
    private static _instance: Galaxy;
    private _regions: Record<interfaces.RegionName, Region> = {};
    private _systems: Record<interfaces.SystemName, SolarSystem> = {};

    private constructor() { }

    public get name() { return Galaxy._name; }

    public static get instance(): Galaxy {
        return this._instance || (this._instance = new this());
    }

    public populateGalaxy(sourceData: interfaces.IEvEUniverse) {

        for (let r of sourceData.regions) {
            const region = new Region(r);
            this._regions[region.regionName] = region;
            Object.assign(this._systems, region.systems);
        }

        for (let j of sourceData.jumps) {
            this._systems[j.from].addLink(j.to);
        }
    }

    public getAllRegionNames = (): interfaces.RegionName[] => {
        return Object.keys(this._regions);
    }

    public getGalaxyCoordinatesandStatuses = (): [string, coordinates3D, number][] => {
        const retVal = [];
        for (let systemName in this._systems) {
            const system = this._systems[systemName];
            retVal.push(
                [system.systemName, { x: system.x, y: system.y, z: system.z }, system.security]
            );
        }
        return retVal;
    }

    public getRegionCoordinatesandStatuses = (regionName: string, asSubway: boolean = false): Result<[string, coordinates3D, number][], string> => {
        const region = this._regions[regionName];
        if (region === undefined) {
            return err(`Unable to find region ${regionName}`);
        }


        const retVal = [];
        Object.keys(region.systems).forEach(systemName => {
            const system = region.systems[systemName];
            retVal.push(
                [system.systemName, { x: system.x, y: system.y, z: system.z }, system.security]
            );
        });
        return ok(retVal);
    }

    public getConnections = (regionName: interfaces.RegionName, asSubway: boolean = false): Result<[coordinates3D, coordinates3D][], string> => {
        const region = this._regions[regionName];
        if (region === undefined) {
            return err(`Unable to find region ${regionName}`);
        }

        const systems = Object.keys(region.systems)
            .map(systemName => region.systems[systemName]);
        const links = [];
        const forward: Record<string, string[]> = {};

        for (let i = 0; i < systems.length; i++) {
            const sourceSystem = systems[i];
            const sourceSystemName = sourceSystem.systemName;
            const mlinks = sourceSystem.links;
            if (forward[sourceSystemName] === undefined) forward[sourceSystemName] = [];

            for (let j = 0; j < mlinks.length; j++) {
                const targetSystemName = mlinks[j];
                const targetSystem = region.systems[targetSystemName];
                if (targetSystem === undefined) {
                    continue;
                }
                else if (forward[targetSystemName]?.find(name => name === sourceSystemName) !== undefined) {
                    console.log("yep");
                    continue;
                }
                else {
                    forward[sourceSystemName].push(targetSystemName);
                    links.push([
                        { x: sourceSystem.x, y: sourceSystem.y, z: sourceSystem.z },
                        { x: targetSystem.x, y: targetSystem.y, z: targetSystem.z }
                    ]);
                }
            }
        }
        return ok(links);
    }

    public regionalSubway = (regionName: interfaces.RegionName): Result<string, string> => {
        const region = this._regions[regionName];
        if (region === undefined) {
            return err(`Unable to find region ${regionName}`);
        }

        const systems = Object.keys(region.systems)
            .map(systemName => region.systems[systemName]);
        const links = [];
        const forward: Record<string, string[]> = {};

        for (let i = 0; i < systems.length; i++) {
            const mlinks = systems[i].links;
            const sourceSystemName = systems[i].systemName;
            const sourceIndex = i;
            if (forward[sourceSystemName] === undefined) forward[sourceSystemName] = [];

            for (let j = 0; j < mlinks.length; j++) {
                const targetSystemName = mlinks[j];
                const targetSystemIndex = systems.findIndex(system => system.systemName === targetSystemName);
                if (targetSystemIndex === -1) {
                    continue;
                }
                else if (forward[targetSystemName]?.find(name => name === sourceSystemName) !== undefined) {
                    continue;
                }
                else {
                    forward[sourceSystemName].push(targetSystemName);
                    links.push({ source: sourceIndex, target: targetSystemIndex, s: sourceSystemName, t: targetSystemName });
                }
            }
        }

        const nodes = systems.map(system => {
            const d = {
                systemName: system.systemName,
                security: system.security,
                x: system.x,
                y: system.y,
                z: 0,
                links: system.links
            }
            return d;
        });

        const simulation2 = cola.d3adaptor(d3)
            .nodes(nodes)
            .links(links)
            .linkDistance(200)
            .symmetricDiffLinkLengths(50)
            .avoidOverlaps(true)
            .handleDisconnected(true)
            .size([10800, 10800])
            .stop()
            ;
        simulation2.start(5000);

        const newSystems = nodes.map(node => {
            const { links, ...data } = node;
            return new SolarSystem(data, links);
        });


        return ok("ok");
    }
}