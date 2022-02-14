import { AUTH_KEY } from "../config/config";

import { crudFunctionType } from "../types/crudTypes";

import { createMessage } from "../utils/createMessage";
import { sendErrorJson, sendJson } from "../utils/sendJson";

import productsModel from "../models/productsModel";

// @desc    Get products
// @route   GET /api/products
// @access  Public
export const getProducts: crudFunctionType = async (req, res) => {
  try {
    const { page, category } = req.query;

    // page setup
    if (!page) {
      sendJson(
        res,
        400,
        "Please provide the query parameter 'page'. It need's to be a number and greater than 0.",
        "Parameter 'page' not received."
      );
      return;
    }

    if (typeof page !== "string" || !parseInt(page) || parseInt(page) < 1) {
      sendJson(
        res,
        400,
        "Page parameter must be a number and greater than 0.",
        "Invalid query parameter."
      );
      return;
    }

    // category setup
    let findParams: any = {};
    if (category && typeof category === "string") {
      const formatedCategory = category.split("+").join(" ");
      findParams.category = formatedCategory;
    }

    const pageNum = parseInt(page);
    const productsSkip = (pageNum - 1) * 9;
    const products = await productsModel
      .find(findParams)
      .skip(productsSkip)
      .limit(9);

    sendJson(res, 200, "`Page ${pageNum} products.`", "", products);
  } catch (err) {
    sendErrorJson(res, (err as { message: string }).message);
  }
};

// @desc    Create products
// @route   POST /api/products
// @access  Private
export const postProducts: crudFunctionType = async (req, res) => {
  try {
    const { auth, products } = req.body;

    if (!auth || auth.split(" ")[1] !== AUTH_KEY) {
      sendJson(
        res,
        401,
        "Please, send the auth key in the body, e.g. {auth: 'Bearer YOUR_KEY'}.",
        "Auth key not provided or incorrect."
      );
      return;
    }

    if (!products || products.constructor !== Array || products.length < 1) {
      sendJson(
        res,
        400,
        "Please, send the products array in the body.",
        "Array with products is missing or enpty."
      );
      return;
    }

    const createdProducts = await productsModel.insertMany(products);

    sendJson(res, 201, "Products created.", "", createdProducts);
  } catch (err) {
    sendErrorJson(res, (err as { message: string }).message);
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
      sendJson(
        res,
        401,
        "Please, send the auth key in the body, e.g. {auth: 'Bearer YOUR_KEY'}.",
        "Auth key not provided or incorrect."
      );
      return;
    }

    if (!newProduct) {
      sendJson(
        res,
        400,
        "Please, send the fields to be updated with the parameter 'newProduct' inside the body.",
        "Product not provided."
      );
      return;
    }

    const product = await productsModel.findById(id);

    if (!product) {
      sendJson(
        res,
        401,
        "Product not found, ID doesn't exist.",
        "Incorrect ID"
      );
      return;
    }

    const updatedProduct = await productsModel.findByIdAndUpdate(
      id,
      newProduct
    );

    sendJson(res, 200, "Product updated.", "", updatedProduct);
  } catch (err) {
    sendErrorJson(res, (err as { message: string }).message);
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
      sendJson(
        res,
        401,
        "Please, send the auth key in the body, e.g. {auth: 'Bearer YOUR_KEY'}.",
        "Auth key not provided or incorrect."
      );
      return;
    }

    const product = await productsModel.findById(id);

    if (!product) {
      sendJson(
        res,
        401,
        "Product not found, ID doesn't exist.",
        "Incorrect ID"
      );
      return;
    }

    const deletedProduct = await productsModel.findByIdAndDelete(id);

    sendJson(res, 200, "Product deleted.", "", deletedProduct);
  } catch (err) {
    sendErrorJson(res, (err as { message: string }).message);
  }
};
