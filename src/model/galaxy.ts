import { db } from "./db";
import { ok, err, Result } from "neverthrow";
import { allRegionNames, regionCoordinatesAndStatusesSubway, regionConnectionsSubway } from "./sql/queries";
import type { Database, SqlValue } from "sql.js";
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

    public getRegionCoordinatesandStatuses(regionName: string): Result<interfaces.INode[], string> {
        if (this.regionNames.find(x => x == regionName) !== undefined) {
            const data = this.getRegionData(regionName, regionCoordinatesAndStatusesSubway) as interfaces.INode[];
            if (data.length === 0) {
                return err(`Region not found: ${regionName}`);
            }
            else {
                return ok(data);
            }
        }
        else {
            return err(`Could not find region: ${regionName}`);
        }
    }

    public getConnections(regionName: interfaces.RegionName): Result<interfaces.IEdge[], string> {
        if (this.regionNames.find(x => x == regionName) !== undefined) {
            const data = this.getRegionData(regionName, regionConnectionsSubway) as interfaces.IEdge[];
            if (data.length === 0) {
                return err(`Region not found: ${regionName}`);
            }
            else {
                return ok(data);
            }
        }
        else {
            return err(`Could not find region: ${regionName}`);
        }
    }
}