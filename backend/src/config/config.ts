const dotenv = require("dotenv").config();

export const NODE_ENV = process.env.NODE_ENV || "production";

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || "";

export const AUTH_KEY = process.env.AUTH_KEY || "";
export const JWT_SECRET = process.env.JWT_SECRET || "";
