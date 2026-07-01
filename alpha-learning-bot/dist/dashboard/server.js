"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../db");
const state_1 = require("../state");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime()
    });
});
app.get("/state", async (req, res) => {
    try {
        const client = (0, db_1.getDB)();
        const result = await client.query(`
            SELECT COUNT(*)::int AS trades
            FROM trades
            `);
        res.json({
            ...state_1.state,
            database: {
                connected: true,
                trades: result.rows[0].trades
            }
        });
    }
    catch (err) {
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
