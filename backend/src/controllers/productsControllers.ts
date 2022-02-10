import { AUTH_KEY } from "../config/config";

import { crudFunctionType } from "../types/crudTypes";
import { productsType } from "../types/productTypes";

import { createMessage } from "../utils/createMessage";

import productsModel from "../models/productsModel";

// @desc    Get home products
// @route   GET /api/products
// @access  Public
export const getHomeProducts: crudFunctionType = async (_, res) => {
  res.status(200).json({ message: "get home products" });
};

// @desc    Post products to server
// @route   GET /api/products
// @access  Private
export const postProducts: crudFunctionType = async (req, res) => {
  try {
    const { products, auth } = req.body;

    if (!auth || auth.split(" ")[1] !== AUTH_KEY) {
      const msg = createMessage(
        { ok: false, errorMsg: "Auth key not provided or incorrect." },
        { message: "Error with the client request" }
      );
      res.status(401).json(msg);
      return;
    }

    if (!products || products.constructor !== Array || products.length < 1) {
      const msg = createMessage(
        { ok: false, errorMsg: "Array with products is missing or enpty." },
        { message: "Error with the client request" }
      );
      res.status(400).json(msg);
      return;
    }

    await productsModel.insertMany(products);

    const msg = createMessage({ ok: true }, { message: "put products" });
    res.status(201).json(msg);
  } catch (err) {
    const msg = createMessage(
      { ok: false, errorMsg: "There is something wrong with the request." },
      { message: (err as { message: string }).message }
    );
    res.status(400).json(msg);
  }
};
