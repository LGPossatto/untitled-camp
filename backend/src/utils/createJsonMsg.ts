import {
  contentInterface,
  jsonMsgType,
  jsonTokenType,
  statusInterface,
} from "../types/jsonTypes";

import { generateToken } from "./generateToken";

export const createJsonMsg = (
  status: statusInterface,
  content: contentInterface | null
): jsonMsgType => {
  return { status, content };
};

export const createJsonToken = ({
  id,
  name,
  email,
  products,
}: jsonTokenType) => {
  const token = generateToken({ id, name, email });

  return { id, name, email, products, token };
};
