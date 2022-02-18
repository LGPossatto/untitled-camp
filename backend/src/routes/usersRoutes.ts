import express from "express";

import { protect } from "../middleware/authMiddleware";
import {
  addProduct,
  getCart,
  loginUser,
  removeProduct,
  signupUser,
} from "../controllers/usersController";

const router = express.Router();

router.route("/login").get(loginUser);
router.route("/signup").post(signupUser);

router.route("/cart").get(protect, getCart);
router
  .route("/cart/:productID")
  .post(protect, addProduct)
  .delete(protect, removeProduct);

export default router;
