import express from "express";
import {
  deleteProduct,
  getHomeProducts,
  postProducts,
  putProduct,
} from "../controllers/productsControllers";

const router = express.Router();

router.route("/").get(getHomeProducts).post(postProducts);
router.route("/:id").put(putProduct).delete(deleteProduct);

export default router;
