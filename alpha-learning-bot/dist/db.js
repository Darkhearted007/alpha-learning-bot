"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
exports.getDB = getDB;
const pg_1 = require("pg");
let client;
async function connectDB() {
    client = new pg_1.Client({
        host: process.env.DB_HOST || "core-postgres",
        port: Number(process.env.DB_PORT || 5432),
        user: process.env.DB_USER || "coreuser",
        password: process.env.DB_PASS || "corepass",
        database: process.env.DB_NAME || "coredb",
    });
    await client.connect();
    console.log("DB CONNECTED");
}
function getDB() {
    if (!client) {
        throw new Error("DB not initialized. Call connectDB first.");
    }
    return client;
}
