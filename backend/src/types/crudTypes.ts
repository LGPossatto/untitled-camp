import { NextFunction, Request, Response } from "express";

export type crudFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
