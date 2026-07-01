"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ENV = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT || 5432),
    DB_USER: process.env.DB_USER || "coreuser",
    DB_PASS: process.env.DB_PASS || "corepass",
    DB_NAME: process.env.DB_NAME || "coredb",
    PORT: Number(process.env.PORT || 4000)
};
