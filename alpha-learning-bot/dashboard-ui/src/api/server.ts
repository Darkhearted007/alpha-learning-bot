import express from "express";
import cors from "cors";
import { state } from "../state";

export function startApi() {
    const app = express();

    app.use(cors({ origin: "*" }));
    app.use(express.json());

    app.get("/health", (_, res) => {
        res.json({ status: "ok" });
    });

    app.get("/state", (_, res) => {
        res.json({
            cycle: state.cycle,
            balance: state.balance,
            openTrades: state.openTrades,
            winRate: state.winRate,
            lastTrade: state.lastTrade
        });
    });

    const PORT = 4000;

    app.listen(PORT, () => {
        console.log(`API running on http://localhost:${PORT}`);
    });
}
