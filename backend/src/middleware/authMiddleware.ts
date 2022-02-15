import { NextFunction, Request, Response } from "express";

import { AUTH_KEY } from "../config/config";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

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

    throw new Error("Not authorized, key is incorrect.");
  }

  throw new Error("Not authorized, key not provided.");
};
