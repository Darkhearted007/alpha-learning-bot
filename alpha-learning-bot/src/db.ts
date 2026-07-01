import { Client } from "pg";

let client: Client;

export async function connectDB() {
    client = new Client({
        host: process.env.DB_HOST || "core-postgres",
        port: Number(process.env.DB_PORT || 5432),
        user: process.env.DB_USER || "coreuser",
        password: process.env.DB_PASS || "corepass",
        database: process.env.DB_NAME || "coredb",
    });

    await client.connect();
    console.log("DB CONNECTED");
}

export function getDB(): Client {
    if (!client) {
        throw new Error("DB not initialized. Call connectDB first.");
    }
    return client;
}
