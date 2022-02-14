import express from "express";
import {
  deleteProduct,
  getProducts,
  postProducts,
  putProduct,
} from "../controllers/productsControllers";

const router = express.Router();

router.route("/").get(getProducts).post(postProducts);
router.route("/:id").put(putProduct).delete(deleteProduct);

export default router;
