import { crudFunctionType } from "../types/crudTypes";
import { createMessage } from "../utils/createMessage";

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
  const { products } = req.body;

  if (!products || products.length < 1) {
    const msg = createMessage(
      { ok: false, errorMsg: "Array with products is missing or enpty." },
      { message: "Error with the client request" }
    );
    res.status(400).json(msg);
    return;
  }

  const msg = createMessage({ ok: true }, { message: "put products" });
  res.status(201).json(msg);
};
