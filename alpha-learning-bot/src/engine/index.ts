import { getDB } from "../db";

export async function runCycle(cycle: number) {
    const client = getDB();

    const result = await client.query("SELECT NOW()");
    const now = result.rows[0].now;

    const volatility = Math.random();
    const momentum = Math.random();
    const confidence = (volatility + momentum) / 2;

    console.log("\n========================");
    console.log("CYCLE:", cycle);
    console.log("TIME:", now.toISOString?.() || now);
    console.log("CONFIDENCE:", confidence.toFixed(2));

    if (confidence < 0.62) {
        console.log("NO TRADE");
        return;
    }

    const action = Math.random() > 0.5 ? "BUY" : "SELL";
    const pnl = (Math.random() - 0.45).toFixed(4);

    console.log("TRADE:", { action, pnl });

    await client.query(
        `INSERT INTO trades (
            cycle, pair, action, entry_reason, exit_reason,
            status, pnl, tags, market_context, confidence, strategy
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [
            cycle,
            "SOL/USDC",
            action,
            `vol:${volatility.toFixed(2)} mom:${momentum.toFixed(2)}`,
            "auto_exit",
            Number(pnl) > 0 ? "win" : "loss",
            pnl,
            "alpha",
            JSON.stringify({ volatility, momentum }),
            confidence,
            confidence > 0.8 ? "momentum_v1" : "mean_reversion_v1"
        ]
    );
}
