import express from "express";

import { PORT } from "./config/config";
import { connectDB } from "./config/db";

import { errorHandler } from "./middleware/errorMiddleware";

import productsRoutes from "./routes/productsRoutes";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productsRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
