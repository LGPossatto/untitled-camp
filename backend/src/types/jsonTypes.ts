import { productsType } from "./productTypes";

export interface statusInterface {
  ok: boolean;
  errorMsg: string | null;
  stack: string | null | undefined;
}

export interface contentInterface {
  message: string;
  payload: any;
}

export type jsonMsgType = {
  status: statusInterface;
  content: contentInterface | null;
};

// ---------------------------------------------------------- //

export type tokenType = {
  id: string;
  name: string;
  email: string;
};

export type jsonTokenType = {
  id: string;
  name: string;
  email: string;
  products: productsType[];
};
