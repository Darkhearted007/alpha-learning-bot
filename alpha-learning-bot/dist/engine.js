"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCycle = runCycle;
const db_1 = require("./db");
const state_1 = require("./state");
async function runCycle(cycle) {
    const client = (0, db_1.getDB)();
    // Get current database/server time
    const result = await client.query("SELECT NOW()");
    const now = result.rows[0].now;
    // Simulated market metrics (replace with real scanner later)
    const volatility = Math.random();
    const momentum = Math.random();
    const confidence = Number(((volatility + momentum) / 2).toFixed(2));
    const shouldTrade = confidence > 0.62;
    // Update shared dashboard state
    state_1.state.cycle = cycle;
    state_1.state.confidence = confidence;
    state_1.state.lastUpdate = new Date(now).toISOString();
    state_1.state.status = shouldTrade ? "TRADING" : "MONITORING";
    console.log("\n==================================");
    console.log(`Cycle        : ${cycle}`);
    console.log(`Time         : ${now}`);
    console.log(`Volatility   : ${volatility.toFixed(2)}`);
    console.log(`Momentum     : ${momentum.toFixed(2)}`);
    console.log(`Confidence   : ${confidence}`);
    if (!shouldTrade) {
        console.log("Decision     : NO TRADE");
        console.log("==================================");
        return;
    }
    // Simulated trade
    const action = Math.random() > 0.5 ? "BUY" : "SELL";
    const pnl = Number((Math.random() - 0.45).toFixed(4));
    const strategy = confidence >= 0.80
        ? "momentum_v1"
        : "mean_reversion_v1";
    const status = pnl >= 0 ? "win" : "loss";
    console.log("Decision     :", action);
    console.log("PnL          :", pnl);
    console.log("Strategy     :", strategy);
    // Persist trade
    await client.query(`
        INSERT INTO trades (
            cycle,
            pair,
            action,
            entry_reason,
            exit_reason,
            status,
            pnl,
            tags,
            market_context,
            confidence,
            strategy
        )
        VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
        )
        `, [
        cycle,
        "SOL/USDC",
        action,
        `vol:${volatility.toFixed(2)} mom:${momentum.toFixed(2)}`,
        "auto_exit",
        status,
        pnl,
        "alpha",
        JSON.stringify({
            volatility,
            momentum
        }),
        confidence,
        strategy
    ]);
    // Update live dashboard state
    state_1.state.tradesExecuted++;
    if (pnl >= 0) {
        state_1.state.wins++;
    }
    else {
        state_1.state.losses++;
    }
    state_1.state.totalPnL += pnl;
    state_1.state.lastTrade = {
        action,
        pnl,
        confidence,
        timestamp: new Date().toISOString()
    };
    console.log("Trade stored successfully.");
    console.log("==================================");
}
