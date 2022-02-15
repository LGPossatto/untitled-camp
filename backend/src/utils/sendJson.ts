import { Response } from "express";
import { createJsonMsg } from "./createJsonMsg";

export const sendJson = (
  res: Response,
  status: number,
  message: string,
  payload: any
) => {
  const msg = createJsonMsg(
    {
      ok: true,
      errorMsg: null,
      stack: null,
    },
    {
      message: message,
      payload,
    }
  );

  res.status(status).json(msg);
};
