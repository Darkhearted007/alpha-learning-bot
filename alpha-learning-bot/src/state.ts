export interface TradeState {
    action: "BUY" | "SELL";
    pnl: number;
    confidence: number;
    timestamp: string;
}

export interface BotState {
    status: "STARTING" | "MONITORING" | "TRADING" | "ERROR";

    cycle: number;

    confidence: number;

    lastUpdate: string;

    uptime: number;

    tradesExecuted: number;

    wins: number;

    losses: number;

    totalPnL: number;

    lastTrade: TradeState | null;
}

export const state: BotState = {
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
