import express from "express";
import {
  deleteProduct,
  getProducts,
  createProducts,
  updateProduct,
} from "../controllers/productsControllers";
import { protectWithKey } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getProducts).post(protectWithKey, createProducts);
router
  .route("/:id")
  .put(protectWithKey, updateProduct)
  .delete(protectWithKey, deleteProduct);

export default router;
