import express from "express";
import {
  getHomeProducts,
  postProducts,
} from "../controllers/productsControllers";

const router = express.Router();

router.route("/").get(getHomeProducts).post(postProducts);
//router.route('/').get(protect, getGoals).post(protect, setGoal)

export default router;
