import express from "express";

import { loginUser, signupUser } from "../controllers/usersController";

const router = express.Router();

router.route("/login").get(loginUser);
router.route("/signup").post(signupUser);

export default router;
