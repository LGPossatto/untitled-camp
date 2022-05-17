import express from "express";

import { protectWithKey } from "../middleware/authMiddleware";
import {
  deleteProduct,
  getProducts,
  createProducts,
  updateProduct,
  getRandomProducts,
  getProductById,
} from "../controllers/productsControllers";

const router = express.Router();

router.route("/").get(getProducts).post(protectWithKey, createProducts);
router.route("/random").get(getRandomProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protectWithKey, updateProduct)
  .delete(protectWithKey, deleteProduct);

export default router;
