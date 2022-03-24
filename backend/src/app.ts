import express from "express";
import cors from "cors";

import { ORIGIN, PORT } from "./config/config";
import { connectDB } from "./config/db";

import { errorHandler } from "./middleware/errorMiddleware";

import productsRoutes from "./routes/productsRoutes";
import usersRoutes from "./routes/usersRoutes";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: ORIGIN }));

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
