import { crudFunctionType } from "../types/crudTypes";

import productsModel from "../models/productsModel";

import { sendJson } from "../utils/sendJson";

// @desc    Get products
// @route   GET /api/products
// @access  Public
export const getProducts: crudFunctionType = async (req, res, next) => {
  try {
    const { page, category } = req.query;

    if (!page) {
      res.status(400);
      throw new Error(
        "Please provide the query parameter 'page'. It need's to be a number and greater than 0."
      );
    }

    if (typeof page !== "string" || !parseInt(page) || parseInt(page) < 1) {
      res.status(400);
      throw new Error("Page parameter must be a number and greater than 0.");
    }

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

    sendJson(res, 200, `Page ${pageNum} products.`, products);
  } catch (err) {
    next(err);
  }
};

// @desc    Create products
// @route   POST /api/products
// @access  Private
export const createProducts: crudFunctionType = async (req, res, next) => {
  try {
    const { products } = req.body;

    if (!products || products.constructor !== Array || products.length < 1) {
      res.status(400);
      throw new Error("Please, send the products array with the body.");
    }

    const createdProducts = await productsModel.insertMany(products);

    sendJson(res, 201, "Products created.", createdProducts);
  } catch (err) {
    next(err);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
export const updateProduct: crudFunctionType = async (req, res, next) => {
  try {
    const { newProduct } = req.body;
    const { id } = req.params;

    if (!newProduct) {
      res.status(400);
      throw new Error(
        "Please, send the fields to be updated with the parameter 'newProduct' inside the body."
      );
    }

    const product = await productsModel.findById(id);

    if (!product) {
      res.status(400);
      throw new Error("Product not found, ID doesn't exist.");
    }

    const updatedProduct = await productsModel.findByIdAndUpdate(
      id,
      newProduct
    );

    sendJson(res, 200, "Product updated.", updatedProduct);
  } catch (err) {
    next(err);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
export const deleteProduct: crudFunctionType = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await productsModel.findById(id);

    if (!product) {
      res.status(400);
      throw new Error("Product not found, ID doesn't exist.");
    }

    const deletedProduct = await productsModel.findByIdAndDelete(id);

    sendJson(res, 200, "Product deleted.", deletedProduct);
  } catch (err) {
    next(err);
  }
};
