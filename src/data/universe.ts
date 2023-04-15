import type { coordinates3D } from '../utils/geometry';
import { forceSimulation, forceManyBody } from "d3-force";
import { ok, err, Result } from "neverthrow";

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

class Region {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _systems: Record<number, System> = {};
    private readonly _remappedSystems: Record<number, System> = {};

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

    get systems() {
        return this._systems;
    }

    public addSystem(system: System): void {
        this._systems[system.id] = system;
    }

    public addRemmapedSystem(system: System): void {
        this._remappedSystems[system.id] = system;
    }

    public getSystem(systemID: number): Result<System, string> {
        const system = this._systems[systemID];
        if (system === undefined) {
            return err(`System ID not found: ${systemID}`);
        }
        else {
            return ok(system)
        }
    }
}

export class Galaxy {
    private readonly _name: String = "New Eden";
    private readonly _regions: Record<string, Region> = {};

    public addRegion(region: Region): void {
        this._regions[region.name] = region;
    }

    public getRegion(regionID: string): Result<Region, string> {
        const region = this._regions[regionID];
        if (region === undefined) {
            return err(`Region not found: ${regionID}`);
        }
        else {
            return ok(region);
        }
    }

    get regions() {
        return this._regions;
    }

    get name() {
        return this._name;
    }

    public populateGalaxy = (sourceData: EvEUniverse) => {

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
            this.getRegion(system.region).map(region => {
                region.addSystem(system);
            }).mapErr(e => { console.log(`Error attempting to find region: ${e}`) });
        }

        //
        // Extremely slow for obvious reasons
        //
        // for (let jump of sourceData.jumps) {
        //     for (let regionID in this.regions) {
        //         this.getRegion(regionID).andThen(region => {
        //             return region.getSystem(jump.from);
        //         }).map(system => {
        //             system.addLink(jump.to);
        //         }).mapErr(e => {
        //             console.log(`Error attempting to add jump to system: ${e}`);
        //         });
        //     }
        // }

        // Object.keys(this.regions).forEach(regionName => {
        //     console.log(`Region: ${regionName}`);
        //     Object.keys(this.getRegion(regionName).systems).forEach(systemName => {
        //         console.log(`\t${systemName}`);
        //     });
        // });

    }

    private produceSystemThing<T>(regionName: string, thing: (arg: System) => T): T[] {
        // TODO: Result.combine can actually fail and it will fail to produce a whole region
        // Don't know how big a worry this is, are there really going to be regions with broken
        // system references?
        const resultList = this.getRegion(regionName).map(region => {
            // For fuck's sake
            return (Object.keys(region.systems) as unknown as Array<keyof typeof region.systems>).map(key => {
                return region.getSystem(key).map(thing);
            });
        });
        return resultList.andThen(list => Result.combine(list)).mapErr(e => { console.log(`Error attempting to fetch a system's thing: ${e}`) }).unwrapOr([]);
    }

    public getRegionCoordinates = (regionName: string): coordinates3D[] => {
        return this.produceSystemThing(regionName, system => system.coordinates);
    }

    public getRegionSecStatuses = (regionName: string): number[] => {
        return this.produceSystemThing(regionName, system => system.securityStatus);
    }

    public getGalaxyCoordinates = (): coordinates3D[] => {
        // This is safe because unless Object.keys is broken
        // so let's cut the crap
        return Object.keys(this._regions).flatMap(this.getRegionCoordinates);
    }

    public getGalaxySecurityStatuses = (): number[] => {
        // This is safe because unless Object.keys is broken
        // so let's cut the crap
        return Object.keys(this._regions).flatMap(this.getRegionSecStatuses);
    }


    public subway = (regionName): void => {
        this.getRegion(regionName).map(region => {
            let coordinates = Object.keys(region.systems).map(systemID => {
                const system: System = region.systems[systemID];
                return { systemID: system.id, ...system.coordinates };
            });

            const simulation = forceSimulation(coordinates)
                .force("charge", forceManyBody().strength(-1))
                .stop();


            simulation.tick(300);

            coordinates.map(coordinate => {
                // remap the axes - we've lost the z axis and if we display this as is we'll get a disc
                // viewed edge-on.
                // Should this belong to this data structure?
                // TODO
                return { systemID: coordinate.systemID, x: coordinate.x, y: coordinate.z, z: coordinate.y }
            })
                .forEach(coordinate => {
                    region.getSystem(coordinate.systemID).map(system => {
                        // copy every stat from the original system
                        // except the coordinates
                        const coordinates = { x: coordinate.x, y: coordinate.y, z: coordinate.z };
                        const securityStatus = system.securityStatus;
                        const regionName = region.name;
                        const systemID = system.id;
                        const systemName = system.name;
                        const links = system.links;
                        const remappedSystem = new System(coordinates, securityStatus, regionName, systemID, systemName, links);
                        region.addRemmapedSystem(remappedSystem);
                        console.log(`Remapped system: ${remappedSystem.name} to ${remappedSystem.coordinates.x} ${remappedSystem.coordinates.y} ${remappedSystem.coordinates.z} `);
                    });
                });
        }).mapErr(e => console.log(`Error attempting to produce a Subway: ${e}`));
    }
}
