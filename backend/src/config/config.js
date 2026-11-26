import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
}

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}

if (!process.env.PORT) {
    throw new Error("PORT is not defined in the environment variables");
}

const config = {
    MONGODB_URL: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    SMTP_SECURE: process.env.SMTP_SECURE === 'true', // Convert to boolean
}

export default config;