import { Database } from "sqlite3";
import fs from "fs";

const main = () => {
    if (!(typeof process !== "undefined" &&
        process.versions != null &&
        process.versions.node != null)) {
        console.error("This file ended up running in the browser by mistake!");
        process.exit(-1);
    }

    const db = new Database("./public/database/database_version_1688131537678.sqlite3");


    fs.writeFileSync(
        `./src/model/region-subway-pretty-${Date.now()}.json`,
        JSON.stringify("", null, 2),
    );
    process.exit(0);
}

main();