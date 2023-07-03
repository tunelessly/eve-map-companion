import initSqlJs from "sql.js";

const payload = await fetch(new URL("/database/database_version_1688131537678.sqlite3", import.meta.url));
const binary = await payload.blob();
const reader = new FileReader();
reader.readAsArrayBuffer(binary);
const asArrayBuffer: ArrayBuffer = await new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject("Error trying to read blob.");
});

const actualDatabase = new Uint8Array(asArrayBuffer);
const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
});

export const db = new SQL.Database(actualDatabase);