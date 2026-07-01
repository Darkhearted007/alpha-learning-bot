import express from "express";
import cors from "cors";

import { getDB } from "../db";
import { state } from "../state";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime()
    });
});

app.get("/state", async (req, res) => {
    try {
        const client = getDB();

        const result = await client.query(
            `
            SELECT COUNT(*)::int AS trades
            FROM trades
            `
        );

        res.json({
            ...state,
            database: {
                connected: true,
                trades: result.rows[0].trades
            }
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Database unavailable"
        });
    }
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Dashboard API running on port ${PORT}`);
});
