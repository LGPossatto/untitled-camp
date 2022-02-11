import { AUTH_KEY } from "../config/config";

import { crudFunctionType } from "../types/crudTypes";

import { createMessage } from "../utils/createMessage";

import productsModel from "../models/productsModel";

// @desc    Get products
// @route   GET /api/products
// @access  Public
export const getHomeProducts: crudFunctionType = async (_, res) => {
  res.status(200).json({ message: "Get products." });
};

// @desc    Create products
// @route   POST /api/products
// @access  Private
export const postProducts: crudFunctionType = async (req, res) => {
  try {
    const { auth, products } = req.body;

    if (!auth || auth.split(" ")[1] !== AUTH_KEY) {
      const msg = createMessage(
        { ok: false, errorMsg: "Auth key not provided or incorrect." },
        { message: "Error with the client request." }
      );
      res.status(401).json(msg);
      return;
    }

    if (!products || products.constructor !== Array || products.length < 1) {
      const msg = createMessage(
        { ok: false, errorMsg: "Array with products is missing or enpty." },
        { message: "Error with the client request." }
      );
      res.status(400).json(msg);
      return;
    }

    const createdProducts = await productsModel.insertMany(products);

    const msg = createMessage(
      { ok: true },
      { message: "Products created.", payload: createdProducts }
    );
    res.status(201).json(msg);
  } catch (err) {
    const msg = createMessage(
      { ok: false, errorMsg: "There is something wrong with the request." },
      { message: (err as { message: string }).message }
    );
    res.status(400).json(msg);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
export const putProduct: crudFunctionType = async (req, res) => {
  try {
    const { auth, newProduct } = req.body;
    const { id } = req.params;

    if (!auth || auth.split(" ")[1] !== AUTH_KEY) {
      const msg = createMessage(
        { ok: false, errorMsg: "Auth key not provided or incorrect." },
        { message: "Error with the client request." }
      );
      res.status(401).json(msg);
      return;
    }

    if (!newProduct) {
      const msg = createMessage(
        { ok: false, errorMsg: "Product not provided." },
        { message: "Error with the client request." }
      );
      res.status(400).json(msg);
      return;
    }

    const product = await productsModel.findById(id);

    if (!product) {
      const msg = createMessage(
        { ok: false, errorMsg: "Product not found, id doesn't exist." },
        { message: "Error with the client request." }
      );
      res.status(400).json(msg);
      return;
    }

    const updatedProduct = await productsModel.findByIdAndUpdate(
      id,
      newProduct
    );
    const msg = createMessage(
      { ok: true },
      { message: "Product updated.", payload: updatedProduct }
    );
    res.status(200).json(msg);
  } catch (err) {
    const msg = createMessage(
      { ok: false, errorMsg: "There is something wrong with the request." },
      { message: (err as { message: string }).message }
    );
    res.status(400).json(msg);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
export const deleteProduct: crudFunctionType = async (req, res) => {
  try {
    const { auth } = req.body;
    const { id } = req.params;

    if (!auth || auth.split(" ")[1] !== AUTH_KEY) {
      const msg = createMessage(
        { ok: false, errorMsg: "Auth key not provided or incorrect." },
        { message: "Error with the client request." }
      );
      res.status(401).json(msg);
      return;
    }

    const product = await productsModel.findById(id);

    if (!product) {
      const msg = createMessage(
        { ok: false, errorMsg: "Product not found, id doesn't exist." },
        { message: "Error with the client request." }
      );
      res.status(400).json(msg);
      return;
    }

    const deletedProduct = await productsModel.findByIdAndDelete(id);
    const msg = createMessage(
      { ok: true },
      { message: "Product deleted.", payload: deletedProduct }
    );
    res.status(200).json(msg);
  } catch (err) {
    const msg = createMessage(
      { ok: false, errorMsg: "There is something wrong with the request." },
      { message: (err as { message: string }).message }
    );
    res.status(400).json(msg);
  }
};
