"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const engine_1 = require("./engine");
require("./dashboard/server");
async function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
async function bootstrap() {
    console.log("==================================");
    console.log(" Alpha Bot Booting...");
    console.log("==================================");
    await (0, db_1.connectDB)();
    let cycle = 0;
    while (true) {
        cycle++;
        try {
            await (0, engine_1.runCycle)(cycle);
        }
        catch (err) {
            console.error("CYCLE ERROR:", err);
        }
        await sleep(3000);
    }
}
bootstrap();
