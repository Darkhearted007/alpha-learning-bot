import { Client } from "pg";

let client: Client;

export async function connectDB() {
    client = new Client({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

    await client.connect();
    console.log("DB CONNECTED");
}

export function getDB() {
    if (!client) throw new Error("DB not initialized");
    return client;
}
