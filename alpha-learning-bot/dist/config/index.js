"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function must(name) {
    const v = process.env[name];
    if (!v)
        throw new Error(`Missing env: ${name}`);
    return v;
}
exports.config = {
    mode: process.env.MODE ?? "paper",
    rpc: must("RPC_URL"),
    tradeSize: Number(process.env.TRADE_SIZE_SOL ?? 0),
    maxDailyLoss: Number(process.env.MAX_DAILY_LOSS_SOL ?? 0),
    maxOpenTrades: Number(process.env.MAX_OPEN_TRADES ?? 0),
    postgres: must("POSTGRES_URL"),
    redis: must("REDIS_URL")
};
