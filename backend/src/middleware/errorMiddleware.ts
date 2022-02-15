import { NextFunction, Request, Response } from "express";
import { NODE_ENV } from "../config/config";
import { createJsonMsg } from "../utils/createJsonMsg";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  const msg = createJsonMsg(
    {
      ok: false,
      errorMsg: err.message,
      stack: NODE_ENV === "production" ? null : err.stack,
    },
    null
  );

  res.json(msg);
};
