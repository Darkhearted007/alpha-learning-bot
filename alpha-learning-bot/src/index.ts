import { connectDB } from "./db";
import { runCycle } from "./engine";
import "./dashboard/server";

async function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

async function bootstrap() {
    console.log("==================================");
    console.log(" Alpha Bot Booting...");
    console.log("==================================");

    await connectDB();

    let cycle = 0;

    while (true) {
        cycle++;

        try {
            await runCycle(cycle);
        } catch (err) {
            console.error("CYCLE ERROR:", err);
        }

        await sleep(3000);
    }
}

bootstrap();
