import express from "express";
import {
  deleteProduct,
  getProducts,
  postProducts,
  putProduct,
} from "../controllers/productsControllers";
import { protectWithKey } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getProducts).post(protectWithKey, postProducts);
router
  .route("/:id")
  .put(protectWithKey, putProduct)
  .delete(protectWithKey, deleteProduct);

export default router;
