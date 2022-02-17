import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { jsonTokenType } from "../types/jsonTypes";
import { AUTH_KEY, JWT_SECRET } from "../config/config";

import usersModel from "../models/usersModel";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = "";

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const { id } = jwt.verify(token, JWT_SECRET) as jsonTokenType;

      // Get user from the token
      const user = await usersModel.findById(id).select("-password");

      if (!user) {
        throw new Error("Not authorized");
      }

      req.user = user;
      next();
    }

    if (!token) {
      throw new Error("Not authorized, token not provided.");
    }
  } catch (err) {
    res.status(401);
    next(err);
  }
};

export const protectWithKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = "";

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    if (token === AUTH_KEY) {
      next();
      return;
    }

    res.status(401);
    throw new Error("Not authorized, key is incorrect.");
  }

  res.status(401);
  throw new Error("Not authorized, key not provided.");
};
