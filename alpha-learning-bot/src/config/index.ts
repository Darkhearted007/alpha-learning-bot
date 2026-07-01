import dotenv from "dotenv";
dotenv.config();

function must(name: string) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env: ${name}`);
    return v;
}

export const config = {
    mode: process.env.MODE ?? "paper",

    rpc: must("RPC_URL"),

    tradeSize: Number(process.env.TRADE_SIZE_SOL ?? 0),

    maxDailyLoss: Number(process.env.MAX_DAILY_LOSS_SOL ?? 0),

    maxOpenTrades: Number(process.env.MAX_OPEN_TRADES ?? 0),

    postgres: must("POSTGRES_URL"),

    redis: must("REDIS_URL")
};
