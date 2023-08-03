import Database from "better-sqlite3";
import { allRegionNames, regionCoordinatesAndStatusesStandard, regionConnectionsStandard, systemsByConstellationStandard } from "./model/sql/queries.js";
import * as d3 from "d3";
import * as cola from "webcola";

const generateSubwayRepresentation = (db: Database.Database) => {
    const regions = db
        .prepare(allRegionNames)
        .all();

    // const regions = [{ regionName: "Aridia" }];

    const simulation = cola.d3adaptor(d3)
        .linkDistance(10)
        .symmetricDiffLinkLengths(10)
        .defaultNodeSize(100)
        .avoidOverlaps(true)
        .handleDisconnected(true)
        ;

    regions
        .map(region => {
            const regionName = region["regionName"];
            const subwayInitiatedFromRegionID = region["regionID"];
            console.log(`Subwaying ${regionName}...`);
            const nodes: any[] = db
                .prepare(regionCoordinatesAndStatusesStandard)
                .all({ name: regionName });

            const links = db
                .prepare(regionConnectionsStandard)
                .all({ name: regionName })
                .map((connection: any) => {
                    const fromID = connection.fromSolarSystemID;
                    const toID = connection.toSolarSystemID;
                    const fromIndex = nodes.findIndex(s => s.solarSystemID === fromID);
                    const toIndex = nodes.findIndex(s => s.solarSystemID === toID);
                    return { source: fromIndex, target: toIndex };
                });

            const groups = db
                .prepare(systemsByConstellationStandard)
                .all({ name: regionName })
                .map((constellation: any) => {
                    return {
                        constellationID: constellation.constellationID,
                        systems: JSON.parse(constellation.systems)
                    }
                })
                .map(constellation => {
                    return {
                        leaves: constellation.systems
                            .map((systemID: number): number => {
                                return nodes.findIndex(s => s.solarSystemID === systemID)
                            }),
                        padding: 1
                    };
                });

            simulation
                .nodes(nodes)
                .links(links)
                .groups(groups)
                .start(100);

            const subwaySystemInsert = db.prepare(`
                insert into systemsSubway (
                     solarSystemID
                    ,constellationID
                    ,regionID
                    ,solarSystemName
                    ,security
                    ,x
                    ,y
                    ,z
                    ,subwayInitiatedFromRegionID
                )
                values
                (
                     $solarSystemID
                    ,$constellationID
                    ,$regionID
                    ,$solarSystemName
                    ,$security
                    ,$x
                    ,$y
                    ,$z
                    ,$subwayInitiatedFromRegionID
                )
            `);

            const insertMany = db.transaction(nodes => {
                for (const node of nodes) {
                    node["subwayInitiatedFromRegionID"] = subwayInitiatedFromRegionID;
                    subwaySystemInsert.run(node)
                }
            });
            insertMany(nodes);
        });
}

const main = () => {
    if (!(typeof process !== "undefined" &&
        process.versions != null &&
        process.versions.node != null)) {
        console.error("This file ended up running in the browser by mistake!");
        process.exit(-1);
    }

    const db = new Database(
        "./public/database/database_version_1688131537678.sqlite3",
        { fileMustExist: true, readonly: false }
    );
    const truncate = db.prepare("delete from systemsSubway");
    truncate.run();

    generateSubwayRepresentation(db);
    process.exit(0);
}

main();