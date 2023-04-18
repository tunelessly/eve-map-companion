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
    private static _instance: Galaxy;
    private readonly _name: String = "New Eden";
    private readonly _regions: Record<RegionName, Region> = {};
    private readonly _subwayRegions: Record<RegionName, Region> = {};
    private readonly _systems: Record<SystemID, System> = {};
    private readonly _subwaySystems: Record<SystemID, System> = {};
    private readonly _regionName2Systems: Record<RegionName, System[]> = {};
    private readonly _subwayRegionName2Systems: Record<RegionName, System[]> = {};
    private readonly _systemID2Region: Record<SystemID, Region> = {};
    private readonly _subwaySystemID2Region: Record<SystemID, Region> = {};
    private _wasInitialized: boolean = false;

    public get wasInitialized(): boolean {
        return this._wasInitialized;
    }

    private constructor() { }

    public static get instance(): Galaxy {
        return this._instance || (this._instance = new this());
    }

    private addRegion(region: Region): void {
        this._regions[region.name] = region;
        this._subwayRegions[region.name] = region;
        this._regionName2Systems[region.name] = [];
        this._subwayRegionName2Systems[region.name] = [];
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

    private addSubwaySystem(system: System): void {
        console.log(`Adding subway system: ${system.name}, ${system.id}`);
        this._subwaySystems[system.id] = system;
        this.getRegion(system.regionName).map(r => {
            // Presumes regions come before systems
            // TODO
            this._subwayRegionName2Systems[r.name].push(system);
            this._subwaySystemID2Region[system.id] = r;
        }).mapErr(e => console.log(`Error while adding a subway system to a region and/or vice versa: ${e}`));
    }

    public getAllRegionNames = (): string[] => {
        return Object.keys(this._regions).sort();
    }

    private getRegion(regionID: string, asSubway: boolean = false): Result<Region, string> {
        const region = asSubway ? this._subwayRegions[regionID] : this._regions[regionID];
        if (region === undefined) {
            return err(`Region not found: ${regionID} Subway mode: ${asSubway}`);
        }
        else {
            return ok(region);
        }
    }

    private getSystem(systemID: SystemID, asSubway: boolean = false): Result<System, string> {
        const maybeSystem1 = asSubway ? this._subwaySystems[systemID] : this._systems[systemID];
        const maybeSystem2 = !asSubway ? this._subwaySystems[systemID] : this._systems[systemID];
        let errorMessage = "";

        if (maybeSystem1 === undefined) {
            errorMessage = `Subway mode: ${asSubway} - Failed to find system ${systemID}. `;
            if (maybeSystem2 === undefined) {
                errorMessage += `Failed to find it on the other dictionary too.`;
            }
            else {
                return ok(maybeSystem2);
            }
            return err(errorMessage);
        }
        else {
            return ok(maybeSystem1);
        }
    }

    private getSystemsFromRegion(regionName: RegionName, asSubway = false): Result<System[], string> {
        const source = asSubway ? this._subwayRegionName2Systems : this._regionName2Systems;
        return this.getRegion(regionName, asSubway).map(region => {
            return source[region.name];
        });
    }

    public get name() {
        return this._name;
    }

    public populateGalaxy(sourceData: EvEUniverse) {

        for (let regionID in sourceData.regions) {
            let regionName = sourceData.regions[regionID];
            let region = new Region(regionID, regionName);
            this.addRegion(region);
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
        this._wasInitialized = true;
    }

    private produceSystemsThings<T>(regionName: RegionName, thing: (arg: System) => T, asSubway: boolean = false): T[] {
        return this.getSystemsFromRegion(regionName, asSubway)
            .map(systems => systems.map(thing))
            .mapErr(e => `Error retreiving a region's systems: ${e} `)
            .unwrapOr([]);
    }

    public getRegionCoordinatesandStatuses = (regionName: string, asSubway: boolean = false): [coordinates3D, number][] => {
        return this.produceSystemsThings(regionName, system => { return [system.coordinates, system.securityStatus] }, asSubway);
    }

    public getGalaxyCoordinatesandStatuses = (): [coordinates3D, number][] => {
        // This is safe unless Object.keys is broken
        // so let's cut the crap
        return Object.keys(this._regions).flatMap(regionName => this.getRegionCoordinatesandStatuses(regionName));
    }

    private link2CoordinatePair = (from: SystemID, to: SystemID, region: RegionName, asSubway: boolean = false): Result<[coordinates3D, coordinates3D], string> => {
        const origin = this.getSystem(from, asSubway);
        const destination = this.getSystem(to, asSubway);
        return Result.combine([origin, destination])
            .map(x => {
                const source = x[0];
                const target = x[1];
                source.coordinates.extra = source.name;
                target.coordinates.extra = target.name;
                if (source.regionName == target.regionName) {
                    return [source.coordinates, target.coordinates];
                }
                else {
                    return [undefined, undefined]; // TODO this is hacky
                }
            });
    }

    public getConnections = (regionName: RegionName, asSubway: boolean = false): [coordinates3D, coordinates3D][] => {
        console.log(`Getting connections as subway? ${asSubway}`);
        return this.getRegion(regionName, asSubway)
            .map(region => this.getSystemsFromRegion(region.name, asSubway))
            .andThen(systems => systems)
            .map(systems => systems.flatMap(system => {
                return (system.links.map((targetSystem: SystemID) => {
                    return this.link2CoordinatePair(system.id, targetSystem, regionName, asSubway);
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
                    return systems.map((system: System): Node => { return { systemID: system.id, x: system.coordinates.x, y: system.coordinates.y, z: 0 } });
                });
        });
        const result = Result.combine(resultList).map(x => x.flatMap(a => a));
        this.subway(result);
    }

    public regionalSubway = (regionName: RegionName): void => {
        const result = this.getRegion(regionName).map(region => {
            return this.getSystemsFromRegion(region.name)
                .map((systems: System[]): Node[] => {
                    return systems.map((system: System): Node => { return { systemID: system.id, x: system.coordinates.x, y: system.coordinates.y, z: 0 } });
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
                            const remappedSystem = new System(coordinates, securityStatus, regionName, systemID, systemName);
                            // console.log(`Remapped ${remappedSystem.name} Coordinates: ${coordinates.x} ${coordinates.y} ${coordinates.z}`);
                            links.forEach(link => remappedSystem.addLink(link));
                            this.addSubwaySystem(remappedSystem);
                        })
                        .mapErr(e => console.log(`Error trying to replace systems: ${e}`));
                });
        });
    }
}