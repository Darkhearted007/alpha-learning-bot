import dotenv from "dotenv";
dotenv.config();

export const ENV = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT || 5432),
    DB_USER: process.env.DB_USER || "coreuser",
    DB_PASS: process.env.DB_PASS || "corepass",
    DB_NAME: process.env.DB_NAME || "coredb",

    PORT: Number(process.env.PORT || 4000)
};
