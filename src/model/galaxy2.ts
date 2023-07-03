import { db } from "./db";
import { ok, err, Result } from "neverthrow";
import { allRegionNames, galaxyCoordinatesAndStatuses, regionCoordinatesAndStatuses, regionConnections } from "./sql/queries";
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

    private row2CoordinatesAndStatuses(row: SqlValue[]): [string, coordinates3D, number] {
        const solarSystemName = row[0].valueOf() as string;
        const coords = { x: row[1].valueOf() as number, y: row[2].valueOf() as number, z: row[3].valueOf() as number };
        const security = row[4].valueOf() as number;
        return [solarSystemName, coords, security];
    }

    private edges2Coordinates(row: SqlValue[]): [coordinates3D, coordinates3D] {
        const fromX = row[0].valueOf() as number;
        const fromY = row[1].valueOf() as number;
        const fromZ = row[2].valueOf() as number;
        const toX = row[3].valueOf() as number;
        const toY = row[4].valueOf() as number;
        const toZ = row[5].valueOf() as number;
        return [
            { x: fromX, y: fromY, z: fromZ },
            { x: toX, y: toY, z: toZ }
        ];
    }

    public getGalaxyCoordinatesandStatuses(): [string, coordinates3D, number][] {
        const data = this._db.exec(galaxyCoordinatesAndStatuses);
        return data
            .map(d => d.values)
            .flatMap(d => d.map(this.row2CoordinatesAndStatuses))
            ;
    }

    public getRegionCoordinatesandStatuses(regionName: string, asSubway: boolean = false): Result<[string, coordinates3D, number][], string> {
        if (this.regionNames.find(x => x == regionName) !== undefined) {
            const data = this._db.exec(regionCoordinatesAndStatuses, { "$name": regionName })
                .map(d => d.values)
                .flatMap(d => d.map(this.row2CoordinatesAndStatuses))
                ;
            if (data.length === 0) {
                return err(`Region not found: ${regionName}`);
            }
            else {
                return ok(data);
            }
        }
        else {
            return err("Not implemented");
        }
    }

    public getConnections(regionName: interfaces.RegionName, asSubway: boolean = false): Result<[coordinates3D, coordinates3D][], string> {
        if (this.regionNames.find(x => x == regionName) !== undefined) {
            const data = this._db.exec(regionConnections, { "$name": regionName })
                .map(d => d.values)
                .flatMap(d => d.map(this.edges2Coordinates))
                ;
            if (data.length === 0) {
                return err(`Region not found: ${regionName}`);
            }
            else {
                return ok(data);
            }
        }
        else {
            return err("Not implemented");
        }
    }
}