import jwt from "jsonwebtoken";

import { tokenType } from "../types/jsonTypes";
import { JWT_SECRET } from "../config/config";

export const generateToken = ({ id, name, email }: tokenType) => {
  const data = { id, name, email };

  return jwt.sign(data, JWT_SECRET, { expiresIn: "30d" });
};
