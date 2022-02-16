import {
  contentInterface,
  jsonMsgType,
  jsonTokenType,
  statusInterface,
} from "../types/jsonTypes";

export const createJsonMsg = (
  status: statusInterface,
  content: contentInterface | null
): jsonMsgType => {
  return { status, content };
};

export const createJsonToken = ({ id, name, email }: jsonTokenType) => {
  return { id, name, email };
};
