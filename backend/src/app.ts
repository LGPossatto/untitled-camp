import express from "express";

import { PORT } from "./config/config";

import productsRoutes from "./routes/productsRoutes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productsRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
