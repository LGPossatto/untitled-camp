import bcrypt from "bcryptjs";

import { crudFunctionType } from "../types/crudTypes";

import usersModel from "../models/usersModel";
import { sendJson } from "../utils/sendJson";
import { generateToken } from "../utils/generateToken";

// @desc    Login user
// @route   GET /api/users/login
// @access  Public
export const loginUser: crudFunctionType = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please, provide an email and a password");
    }

    const user = await usersModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken({
        id: user.id,
        name: user.name,
        email: user.email,
      });

      sendJson(res, 200, "Login successful.", token);
    } else {
      throw new Error("The email or password is invalid.");
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Sign up new user
// @route   POST /api/users/signup
// @access  Public
export const signupUser: crudFunctionType = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Please, provide a name, an email, and a password");
    }

    // check if user exist
    const user = await usersModel.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }

    // process user info
    const salt = await bcrypt.genSalt();
    const encodedPassword = await bcrypt.hash(password, salt);

    const newUser = await usersModel.create({
      name,
      email,
      password: encodedPassword,
      products: [],
    });

    if (newUser) {
      const token = generateToken({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      });

      sendJson(res, 201, "User Created.", token);
    } else {
      throw new Error("Invalid user data.");
    }
  } catch (err) {
    next(err);
  }
};
