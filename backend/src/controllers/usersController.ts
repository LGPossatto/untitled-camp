import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import { crudFunctionType } from "../types/crudTypes";

import usersModel from "../models/usersModel";
import { sendJson } from "../utils/sendJson";
import { generateToken } from "../utils/generateToken";
import { userType } from "../types/userTypes";

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

// @desc    Add product to user cart
// @route   POST /api/users/cart/:productID
// @access  Private
export const addProduct: crudFunctionType = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const { id } = req.user;

    const user = (await usersModel.findById(id)) as userType;

    if (!user) {
      res.status(401);
      throw new Error("User not found.");
    }

    let updatedUser;
    if (user.products.some((product) => product._id.toString() === productID)) {
      // check if product exist
      updatedUser = await usersModel.findByIdAndUpdate(
        id,
        { $inc: { "products.$[el].quant": 1 } },
        {
          arrayFilters: [{ "el._id": new mongoose.Types.ObjectId(productID) }],
          new: true,
        }
      );
    } else {
      // if product don't exists ad one
      updatedUser = await usersModel.findByIdAndUpdate(
        id,
        {
          $push: {
            products: { _id: new mongoose.Types.ObjectId(productID), quant: 1 },
          },
        },
        { safe: true, upsert: true, new: true }
      );
    }

    sendJson(res, 200, "Product added.", updatedUser);
  } catch (err) {
    next(err);
  }
};
