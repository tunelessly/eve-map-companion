import type { coordinates3D } from '../utils/geometry';
import { forceSimulation, forceManyBody } from "d3-force";
import { ok, err, Result } from "neverthrow";

type RegionName = string;
type SystemID = number;

type Node = {
    systemID: number
    x: number
    y: number
    z: number
}

type SolarSystem = {
    name: string
    id: number
    security: number
    region: string
    x: number
    y: number
    z: number
}

type Jumps = {
    from: number
    to: number
}

export type EvEUniverse = {
    regions: Record<string, string>
    solarSystems: SolarSystem[]
    jumps: Jumps[]
}

class System {
    public readonly coordinates: coordinates3D;
    public readonly securityStatus: number;
    public readonly name: string;
    public readonly id: SystemID;
    public readonly regionName: RegionName;
    private readonly _links: number[] = [];

    constructor(coordinates, securityStatus, regionName, id, name) {
        this.coordinates = coordinates;
        this.securityStatus = securityStatus;
        this.regionName = regionName;
        this.id = id;
        this.name = name;
    }

    public addLink(systemID: SystemID): void {
        this._links.push(systemID);
    }

    public get links() {
        return this._links;
    }
}

class Region {
    private readonly _id: string;
    private readonly _name: RegionName;

    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}

export class Galaxy {
    private readonly _name: String = "New Eden";
    private readonly _regions: Record<RegionName, Region> = {};
    private readonly _systems: Record<SystemID, System> = {};
    private readonly _regionName2Systems: Record<RegionName, System[]> = {};
    private readonly _systemID2Region: Record<SystemID, Region> = {};

    private addRegion(region: Region): void {
        this._regions[region.name] = region;
        this._regionName2Systems[region.name] = [];
    }

    private addSystem(system: System): void {
        this._systems[system.id] = system;
        this.getRegion(system.regionName).map(r => {
            // Presumes regions come before systems
            // TODO
            this._regionName2Systems[r.name].push(system);
            this._systemID2Region[system.id] = r;
        }).mapErr(e => console.log(`Error while adding a system to a region and/or vice versa: ${e}`));
    }

    private replaceSystem(system: System): void {
        this._systems[system.name] = system;
        this.getRegion(system.regionName).map(r => {
            // Presumes regions come before systems
            // TODO
            const index = this._regionName2Systems[r.name].findIndex(s => system.id === s.id);
            this._regionName2Systems[r.name][index] = system;
            this._systemID2Region[system.id] = r;
        }).mapErr(e => console.log(`Error while replacing a system: ${e}`));
    }


    private getRegion(regionID: string): Result<Region, string> {
        const region = this._regions[regionID];
        if (region === undefined) {
            return err(`Region not found: ${regionID}`);
        }
        else {
            return ok(region);
        }
    }

    private getSystem(systemID: SystemID): Result<System, string> {
        const system = this._systems[systemID];
        if (system === undefined) {
            return err(`System not found: ${systemID}`);
        }
        else {
            return ok(system);
        }
    }

    private getSystemsFromRegion(regionName: RegionName): Result<System[], string> {
        return this.getRegion(regionName).map(region => {
            return this._regionName2Systems[region.name];
        });
    }

    public get name() {
        return this._name;
    }

    public populateGalaxy(sourceData: EvEUniverse) {

        for (let regionID in sourceData.regions) {
            let regionName = sourceData.regions[regionID];
            let region = new Region(regionID, regionName);
            this.addRegion(region)
        }

        for (let s of sourceData.solarSystems) {
            let system = new System(
                { x: s.x, y: s.y, z: s.z },
                s.security,
                s.region,
                s.id,
                s.name
            );
            this.addSystem(system);
        }

        for (let jump of sourceData.jumps) {
            this.getSystem(jump.from)
                .map(system => {
                    system.addLink(jump.to);
                }).mapErr(e => {
                    console.log(`Error attempting to add jump to system: ${e}`);
                });
        }
    }

    private produceSystemsThings<T>(regionName: RegionName, thing: (arg: System) => T): T[] {
        return this.getSystemsFromRegion(regionName)
            .map(systems => systems.map(thing))
            .mapErr(e => `Error retreiving a region's systems: ${e} `)
            .unwrapOr([]);
    }

    public getRegionCoordinatesandStatuses = (regionName: string): [coordinates3D, number][] => {
        return this.produceSystemsThings(regionName, system => { return [system.coordinates, system.securityStatus] });
    }

    public getGalaxyCoordinatesandStatuses = (): [coordinates3D, number][] => {
        // This is safe unless Object.keys is broken
        // so let's cut the crap
        return Object.keys(this._regions).flatMap(this.getRegionCoordinatesandStatuses);
    }

    private link2CoordinatePair = (from: SystemID, to: SystemID): Result<[coordinates3D, coordinates3D], string> => {
        const origin = this.getSystem(from).map(s => s.coordinates);
        const destination = this.getSystem(to).map(s => s.coordinates);
        return Result.combine([origin, destination]);
    }

    public getConnections = (regionName: RegionName): [coordinates3D, coordinates3D][] => {
        return this.getRegion(regionName)
            .map(region => this.getSystemsFromRegion(region.name))
            .andThen(systems => systems)
            .map(systems => systems.flatMap(system => {
                return (system.links.map((targetSystem: SystemID) => {
                    return this.link2CoordinatePair(system.id, targetSystem);
                }));
            }))
            .andThen(x => Result.combine(x))
            .mapErr(e => console.log(`Error trying to produce connections: ${e}`))
            .unwrapOr([])
    }

    public galacticSubway = (): void => {
        const resultList = Object.keys(this._regions).map(key => {
            const region = this._regions[key];
            return this.getSystemsFromRegion(region.name)
                .map((systems: System[]): Node[] => {
                    return systems.map((system: System): Node => { return { systemID: system.id, ...system.coordinates } });
                });
        });
        const result = Result.combine(resultList).map(x => x.flatMap(a => a));
        this.subway(result);
    }

    public regionalSubway = (regionName: RegionName): void => {
        const result = this.getRegion(regionName).map(region => {
            return this.getSystemsFromRegion(region.name)
                .map((systems: System[]): Node[] => {
                    return systems.map((system: System): Node => { return { systemID: system.id, ...system.coordinates } });
                })
        })
            .andThen(x => x);
        this.subway(result);
    }

    private subway = (source: Result<Node[], any>): void => {
        source.map(nodes => {
            const simulation = forceSimulation(nodes)
                .force("charge", forceManyBody().strength(-1))
                .stop();
            simulation.tick(300);

            nodes.map(coordinate => {
                // remap the axes - we've lost the z axis and if we display this as is we'll get a disc
                // viewed edge-on.
                // Should this belong to this data structure?
                // TODO
                return { systemID: coordinate.systemID, x: coordinate.x, y: coordinate.z, z: coordinate.y }
            })
                .forEach(coordinate => {
                    this
                        .getSystem(coordinate.systemID)
                        .map(system => {
                            // copy every stat from the original system
                            // except the coordinates
                            const coordinates = { x: coordinate.x, y: coordinate.y, z: coordinate.z };
                            const securityStatus = system.securityStatus;
                            const regionName = system.regionName;
                            const systemID = system.id;
                            const systemName = system.name;
                            const links = system.links;
                            const remappedSystem = new System(coordinates, securityStatus, regionName, systemID, systemName, links);
                            this.replaceSystem(remappedSystem);
                        })
                        .mapErr(e => console.log(`Error trying to replace systems: ${e}`));
                });
        });
    }
}