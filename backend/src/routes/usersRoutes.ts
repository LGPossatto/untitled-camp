import express from "express";

import { protect } from "../middleware/authMiddleware";
import {
  addProduct,
  loginUser,
  signupUser,
} from "../controllers/usersController";

const router = express.Router();

router.route("/login").get(loginUser);
router.route("/signup").post(signupUser);

router.route("/cart/:productID").post(protect, addProduct);

export default router;
