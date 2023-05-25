import type * as interfaces from './interfaces.js';
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

    constructor(data: interfaces.ISolarSystem) {
        this._systemName = data.systemName;
        this._security = parseFloat(Number(data.security).toPrecision(1));
        this._x = data.x;
        this._y = data.y;
        this._z = data.z;
        this._links = data.links;
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

    public serialize(): interfaces.ISolarSystem {
        return {
            systemName: this._systemName,
            security: this._security,
            x: this._x,
            y: this._y,
            z: this._z,
            links: this._links,
        }
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

    public replaceSystem(replacement: SolarSystem): Result<string, string> {
        let found = false;
        console.log(`\t Attempting to replace system ${replacement.systemName} in constellation ${this._constellationName}`);
        for (let i = 0; i < this._systems.length; i++) {
            const system = this._systems[i];
            if (system.systemName === replacement.systemName) {
                found = true;
                this._systems[i] = replacement;
            }
        }
        if (found) {
            return ok(`Successfully replaced ${replacement.systemName} in constellation ${this._constellationName}`)
        }
        else {
            return err(`Unable to find ${replacement.systemName} in constellation ${this._constellationName}`);
        }
    }

    public serialize(): interfaces.IConstellation {
        return {
            constellationName: this._constellationName,
            systems: this._systems.map(system => system.serialize()),
        }
    }
}

class Region implements interfaces.IRegion {
    private readonly _regionName: interfaces.RegionName;
    private readonly _constellations: Constellation[];

    constructor(data: interfaces.IRegion) {
        this._regionName = data.regionName;

        const constellations = [];
        for (let c of data.constellations) {
            const constellation = new Constellation(c);
            constellations.push(constellation);
        }
        this._constellations = constellations;
    }

    public get regionName() { return this._regionName };
    public get constellations() { return this._constellations };

    public get regionSystems(): SolarSystem[] {
        return this._constellations.flatMap(c => c.systems)
    };

    public findSystemConstellation(systemName: interfaces.SystemName): Result<Constellation, string> {
        for (let constellation of this.constellations) {
            const result = constellation.systems.find(s => s.systemName === systemName);
            if (result !== undefined) {
                return ok(constellation);
            }
        }
        return err(`System ${systemName} not found in any of ${this._regionName}'s constellations.`);
    }

    public findSystem(systemName: interfaces.SystemName): Result<SolarSystem, string> {
        const system = this._constellations
            .flatMap(c => c.systems)
            .find(s => s.systemName === systemName)

        if (system === undefined) {
            return err(`System ${systemName} not found in region ${this._regionName}`);
        }
        else {
            return ok(system)
        }
    }

    public replaceSystem(replacement: SolarSystem): Result<string, string> {
        const results: Result<string, string>[] = [];
        console.log(`Replacing system ${replacement.systemName} in region ${this._regionName}`);
        for (let i = 0; i < this._constellations.length; i++) {
            const constellation = this._constellations[i];
            const result = constellation.replaceSystem(replacement);
            result
                .map(s => console.log(`\t ${s}`))
                .mapErr(s => console.error(`\t ${s}`));
            results.push(result);
        }

        for (let result of results) {
            if (result.isOk()) {
                return result;
            }
        }

        return err(`System ${replacement.systemName} not found in any of the constellations of ${this._regionName}`);
    }

    public serialize(): interfaces.IRegion {
        return {
            regionName: this._regionName,
            constellations: this._constellations.map(constellation => constellation.serialize())
        }
    }
}

export class Galaxy {
    private static readonly _name: string = "New Eden";
    private static _instance: Galaxy;
    private _standardRegions: Record<interfaces.RegionName, Region> = {};
    private _subwayRegions: Record<interfaces.RegionName, Region> = {}

    private constructor() { }

    public get name() { return Galaxy._name; }

    public static get instance(): Galaxy {
        return this._instance || (this._instance = new this());
    }

    public populateGalaxy(sourceData: interfaces.IEvEUniverse) {
        const systems: Record<interfaces.SystemName, SolarSystem> = {};

        for (let r of sourceData.regions) {
            const region = new Region(r);
            this._standardRegions[region.regionName] = region;
            for (let system of region.regionSystems) {
                systems[system.systemName] = system;
            }
        }
    }

    public populateGalaxyAsSubway(sourceData: interfaces.IEvEUniverse) {
        const systems: Record<interfaces.SystemName, SolarSystem> = {};

        for (let r of sourceData.regions) {
            const region = new Region(r);
            this._subwayRegions[region.regionName] = region;
            for (let system of region.regionSystems) {
                systems[system.systemName] = system;
            }
        }
    }

    public getAllRegionNames = (): interfaces.RegionName[] => {
        return Object.keys(this._standardRegions);
    }

    private getRegionByName(regionName: interfaces.RegionName, asSubway: boolean = false): Result<Region, string> {
        const regions = asSubway ? this._subwayRegions : this._standardRegions;
        const region = regions[regionName];
        if (region === undefined) {
            return err(`${asSubway ? "Subway Region" : "Standard Region"} ${regionName} not found`)
        }
        else {
            return ok(region);
        }
    }

    public getGalaxyCoordinatesandStatuses = (): [string, coordinates3D, number][] => {
        return Object.keys(this._standardRegions)
            .map(regionName => this._standardRegions[regionName])
            .flatMap(region => region.regionSystems)
            .map(system => [system.systemName, { x: system.x, y: system.y, z: system.z }, system.security]);
    }

    public getRegionCoordinatesandStatuses = (regionName: string, asSubway: boolean = false): Result<[string, coordinates3D, number][], string> => {
        return this.getRegionByName(regionName, asSubway)
            .map(region => {
                const mambo = region.regionSystems.reduce((acc, system) => {
                    acc.push(
                        [system.systemName, { x: system.x, y: system.y, z: system.z }, system.security]
                    );
                    return acc;
                }, []);
                return mambo;
            });
    }

    // The complication is due to the fact that _all_ stargate connections are bidirectional
    // but the data doesn't assume that that'ss the case.
    // So in order to avoid drawing two edges that are exactly the same on top of one another 
    // we remove them here.
    private getConnectionsAs<T>
        (
            regionName: interfaces.RegionName,
            asFn: (source: SolarSystem, target: SolarSystem, sourceIndex?: number, targetIndex?: number) => T,
            asSubway: boolean = false
        )
        : Result<T[], string> {
        return this.getRegionByName(regionName, asSubway)
            .map(region => {
                const systems = region.regionSystems;
                const links = [];
                const forward: Record<string, string[]> = {};

                for (let i = 0; i < systems.length; i++) {
                    const sourceSystem = systems[i];
                    const sourceSystemName = sourceSystem.systemName;
                    const sourceIndex = i;
                    const mlinks = sourceSystem.links;
                    if (forward[sourceSystemName] === undefined) forward[sourceSystemName] = [];

                    for (let j = 0; j < mlinks.length; j++) {
                        const targetSystemName = mlinks[j];
                        const targetSystem = region.findSystem(targetSystemName).mapErr(console.error).unwrapOr(undefined);
                        const targetSystemIndex = systems.findIndex(system => system.systemName === targetSystemName);
                        if (targetSystem === undefined) {
                            continue;
                        }
                        else if (forward[targetSystemName]?.find(name => name === sourceSystemName) !== undefined) {
                            continue;
                        }
                        else {
                            forward[sourceSystemName].push(targetSystemName);
                            links.push(asFn(sourceSystem, targetSystem, sourceIndex, targetSystemIndex));
                        }
                    }
                }
                return links;
            });
    }

    public getConnections = (regionName: interfaces.RegionName, asSubway: boolean = false): Result<[coordinates3D, coordinates3D][], string> => {
        return this.getConnectionsAs(
            regionName,
            (source, target) => {
                return [{ x: source.x, y: source.y, z: source.z }, { x: target.x, y: target.y, z: target.z }]
            },
            asSubway
        );
    }

    public generateSubwayRepresentation = () => {
        const regions = this._standardRegions;
        Object.keys(regions)
            .map(regionName => regions[regionName])
            .map(region => {
                const systems = region.regionSystems;
                const links = this.getConnectionsAs(
                    region.regionName,
                    (source, target, sourceIndex, targetIndex) => {
                        return { source: sourceIndex, target: targetIndex, s: source.systemName, t: target.systemName };
                    }
                );

                links.map(l => {
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

                    const groups = [];

                    for (let i = 0; i < nodes.length; i++) {
                        const system = nodes[i];
                        const result = region.findSystemConstellation(system.systemName);
                        result
                            .map(c => {
                                const index = groups.findIndex(r => r.constellationName === c.constellationName);
                                let group;
                                if (index == -1) {
                                    group = { leaves: [], constellationName: c.constellationName }
                                    groups.push(group);
                                }
                                else {
                                    group = groups[index];
                                }
                                group.leaves.push(i);
                            })
                            .mapErr(console.error);
                    }


                    const simulation = cola.d3adaptor(d3)
                        .nodes(nodes)
                        .links(l)
                        .groups(groups)
                        .linkDistance(10)
                        .symmetricDiffLinkLengths(10)
                        .avoidOverlaps(true)
                        .handleDisconnected(true)
                        .stop()
                        ;
                    simulation.start(5000);

                    const newSystems = nodes.map(node => {
                        return new SolarSystem(node);
                    });

                    console.log(`Copying region ${region.regionName}`);
                    const newRegion = new Region(region);
                    newSystems.forEach(system => {
                        newRegion.replaceSystem(system)
                            .map(console.log)
                            .mapErr(console.error)
                            ;
                    });
                    this._subwayRegions[newRegion.regionName] = newRegion;
                })
                    .mapErr(e => console.error(`Error trying to get links during subwayification: ${e}`));
            });
    }

    public serializeSubway() {
        return Object.keys(this._subwayRegions)
            .map(regionName => this._subwayRegions[regionName])
            .reduce((acc, region) => {
                acc.regions.push(region.serialize());
                return acc;
            }, { regions: [] })
    }
}