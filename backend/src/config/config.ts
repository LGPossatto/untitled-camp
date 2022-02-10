const dotenv = require("dotenv").config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || "";
export const AUTH_KEY = process.env.AUTH_KEY || "";
