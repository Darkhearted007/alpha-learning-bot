"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
exports.getDB = getDB;
const pg_1 = require("pg");
let client;
async function connectDB() {
    client = new pg_1.Client({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });
    await client.connect();
    console.log("DB CONNECTED");
}
function getDB() {
    if (!client)
        throw new Error("DB not initialized");
    return client;
}
