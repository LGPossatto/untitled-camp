import jwt from "jsonwebtoken";

import { jsonTokenType } from "../types/jsonTypes";
import { JWT_SECRET } from "../config/config";

import { createJsonToken } from "./createJsonMsg";

export const generateToken = ({ id, name, email }: jsonTokenType) => {
  const formatedObj = createJsonToken({ id, name, email });

  return jwt.sign(formatedObj, JWT_SECRET, { expiresIn: "30d" });
};
