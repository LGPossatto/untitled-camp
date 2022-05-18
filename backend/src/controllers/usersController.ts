import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import { crudFunctionType } from "../types/crudTypes";
import { userType } from "../types/userTypes";

import { sendJson } from "../utils/sendJson";
import { createJsonToken } from "../utils/createJsonMsg";

import usersModel from "../models/usersModel";

// @desc    Login user
// @route   GET /api/users/login
// @access  Public
export const loginUser: crudFunctionType = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Please, provide an email and a password");
    }

    const user = await usersModel
      .findOne({ email })
      .populate("products.product");

    if (user && (await bcrypt.compare(password, user.password))) {
      const jsonToken = createJsonToken({
        id: user.id,
        name: user.name,
        email: user.email,
        products: user.products,
      });

      sendJson(res, 200, "Login successful.", jsonToken);
    } else {
      res.status(401);
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
      res.status(400);
      throw new Error("Please, provide a name, an email, and a password");
    }

    // check if user exist
    const user = await usersModel.findOne({ email });
    if (user) {
      res.status(401);
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
      const token = createJsonToken({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        products: newUser.products,
      });

      sendJson(res, 201, "User Created.", token);
    } else {
      res.status(400);
      throw new Error("Invalid user data.");
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Get user cart
// @route   GET /api/users/cart
// @access  Private
export const getCart: crudFunctionType = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await usersModel.findById(id).populate("products.product");

    if (!user) {
      res.status(401);
      throw new Error("User not found.");
    }

    sendJson(res, 200, "User cart retrived.", user.products);
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
    const { quant } = req.body;
    const { id } = req.user;

    if (!quant || quant <= 0) {
      res.status(400);
      throw new Error(
        "The body must contain the 'quant' param, and 'quant must be greater than 0."
      );
    }

    const user = (await usersModel.findById(id)) as userType;

    if (!user) {
      res.status(401);
      throw new Error("User not found.");
    }

    let updatedUser: userType | null | undefined;
    if (
      user.products.some((product) => product.product.toString() === productID)
    ) {
      // check if product exist
      updatedUser = await usersModel.findByIdAndUpdate(
        id,
        { $inc: { "products.$[el].quant": quant } },
        {
          arrayFilters: [
            { "el.product": new mongoose.Types.ObjectId(productID) },
          ],
          new: true,
        }
      );
    } else {
      // if product don't exists ad one
      updatedUser = await usersModel.findByIdAndUpdate(
        id,
        {
          $push: {
            products: {
              product: new mongoose.Types.ObjectId(productID),
              quant: quant,
            },
          },
        },
        { safe: true, upsert: true, new: true }
      );
    }

    sendJson(res, 200, "Product added.", productID);
  } catch (err) {
    next(err);
  }
};

// @desc    Remove product from user cart
// @route   DELETE /api/users/cart/:productID
// @access  Private
export const removeProduct: crudFunctionType = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const { quant } = req.body;
    const { id } = req.user;

    if (!quant || quant <= 0) {
      res.status(400);
      throw new Error(
        "The body must contain the 'quant' param, and 'quant must be greater than 0."
      );
    }

    const user = (await usersModel.findById(id)) as userType;

    if (!user) {
      res.status(401);
      throw new Error("User not found.");
    }

    let updatedUser: userType | null | undefined;

    for (const product of user.products) {
      if (product.product.toString() === productID) {
        if (product.quant > quant) {
          updatedUser = await usersModel.findByIdAndUpdate(
            id,
            { $inc: { "products.$[el].quant": -quant } },
            {
              arrayFilters: [
                { "el.product": new mongoose.Types.ObjectId(productID) },
              ],
              new: true,
            }
          );
        } else {
          updatedUser = await usersModel.findByIdAndUpdate(
            id,
            {
              $pull: {
                products: { product: new mongoose.Types.ObjectId(productID) },
              },
            },
            { safe: true }
          );
        }

        break;
      }
    }

    if (!updatedUser) {
      res.status(400);
      throw new Error("Product id is invalid or don't exist.");
    }

    sendJson(res, 200, "Product removed.", productID);
  } catch (err) {
    next(err);
  }
};
