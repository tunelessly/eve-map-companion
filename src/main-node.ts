import { Galaxy } from "./model/galaxy.js";
import eveUniverse from './model/universe-pretty-1681826348662.json' assert {type: "json" };
import fs from "fs";

const main = () => {
    if (!(typeof process !== "undefined" &&
        process.versions != null &&
        process.versions.node != null)) {
        console.error("This file ended up running in the browser by mistake!");
        return;
    }

    const galaxy = Galaxy.instance;
    galaxy.populateGalaxy(eveUniverse);
    galaxy.getAllRegionNames().forEach(regionName => {
        console.log(`Subwayifying ${regionName}`);
        galaxy.regionalSubway(regionName);
    });

    const regionSubways = galaxy.serializeSubway();

    fs.writeFileSync(
        `./src/model/region-subway-pretty-${Date.now()}.json`,
        JSON.stringify(regionSubways, null, 2),
    );

}

main();