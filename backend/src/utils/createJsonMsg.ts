import {
  contentInterface,
  stantardJsonType,
  statusInterface,
} from "../types/jsonTypes";

export const createJsonMsg = (
  status: statusInterface,
  content: contentInterface | null
): stantardJsonType => {
  return { status, content };
};
