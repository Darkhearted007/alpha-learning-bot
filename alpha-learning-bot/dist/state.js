"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
exports.state = {
    status: "STARTING",
    cycle: 0,
    confidence: 0,
    lastUpdate: new Date().toISOString(),
    uptime: Date.now(),
    tradesExecuted: 0,
    wins: 0,
    losses: 0,
    totalPnL: 0,
    lastTrade: null
};
