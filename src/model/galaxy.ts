import { db } from "./db";
import { ok, err, Result } from "neverthrow";
import { allRegionNames, regionCoordinatesAndStatusesSubway, regionConnectionsSubway, systemsByConstellationSubway } from "./sql/queries";
import type { Database } from "sql.js";
import type * as interfaces from './interfaces.js';

export type coordinates3D = {
    x: number;
    y: number;
    z: number;
}

export class Galaxy {
    private static readonly _name: string = "New Eden";
    private static _instance: Galaxy;
    private _regionNames: interfaces.RegionName[];
    private _db: Database = db;

    private constructor() { }

    public get name() { return Galaxy._name; }

    public static get instance(): Galaxy {
        return this._instance || (this._instance = new this());
    }

    public getAllRegionNames(): interfaces.RegionName[] {
        const data = this._db.exec(allRegionNames)
            .flatMap(d => d.values)
            .map(d => d[0].valueOf() as string)
            ;
        this._regionNames = data;
        return data;
    }

    private get regionNames(): interfaces.RegionName[] {
        if (this._regionNames === undefined) {
            this.getAllRegionNames();
        }
        return this._regionNames;
    }

    private getRegionData(regionName: string, query: string): Object[] {
        return this._db.exec(query, { "$name": regionName })
            .map(d => d.values)
            .flatMap(d => d.map(r => JSON.parse(r[0].valueOf() as string)))
            ;
    }

    private getRegionDataAs<T>(regionName: interfaces.RegionName, asFn: (arg: interfaces.IRegionDataCoordinates) => T): Result<T, string> {
        if (this.regionNames.find(x => x == regionName) !== undefined) {
            const nodes = this.getRegionData(regionName, regionCoordinatesAndStatusesSubway) as interfaces.INode[];
            const edges = this.getRegionData(regionName, regionConnectionsSubway) as interfaces.IEdgeCoordinates[];
            const groups = this.getRegionData(regionName, systemsByConstellationSubway) as interfaces.IGroup[];
            const length = Math.max(nodes.length, edges.length, groups.length);
            if (length === 0) {
                return err(`Insufficient data produced for ${regionName}: ${nodes.length}, ${edges.length}, ${groups.length}`);
            }
            else {
                const data: interfaces.IRegionDataCoordinates = { nodes, edges, groups, regionName };
                const retVal = asFn(data);
                return ok(retVal);
            }
        }
        else {
            return err(`Could not find region: ${regionName}`);
        }
    }

    public getDataForRegion(regionName: interfaces.RegionName): Result<interfaces.IRegionDataCoordinates, string> {
        const asFN = x => x;
        return this.getRegionDataAs(regionName, asFN);
    }

    public getDataForRegionIndices(regionName: interfaces.RegionName): Result<interfaces.IRegionDataIndices, string> {
        const asFN = (data: interfaces.IRegionDataCoordinates): interfaces.IRegionDataIndices => {
            const edges = data.edges
                .map(connection => {
                    const fromName = connection.fromName;
                    const toName = connection.toName;
                    const fromIndex = data.nodes.findIndex(s => s.systemName === fromName);
                    const toIndex = data.nodes.findIndex(s => s.systemName === toName);
                    return { source: fromIndex, target: toIndex };
                });
            const groups = data.groups
                .map(constellation => {
                    return {
                        constellationID: constellation.constellationID,
                        leaves: constellation.leaves
                            .map((systemID: number): number => {
                                return data.nodes.findIndex(s => s.solarSystemID === systemID)
                            })
                    }
                });
            return {
                regionName: data.regionName,
                nodes: data.nodes,
                edges,
                groups,
            };
        }
        return this.getRegionDataAs(regionName, asFN);
    }
}