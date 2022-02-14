import { Response } from "express";

import { createMessage } from "./createMessage";

export const sendJson = (
  res: Response,
  status: number,
  message: string,
  errorMsg?: string,
  payload?: any
) => {
  let ok: boolean;

  if (status >= 0 && status < 400) {
    ok = true;
  } else {
    ok = false;
  }

  const msg = createMessage({ ok, errorMsg }, { message, payload });

  res.status(status).json(msg);
};

export const sendErrorJson = (res: Response, message: string) => {
  const msg = createMessage(
    { ok: false, errorMsg: "There is something wrong with the request." },
    { message }
  );

  res.status(400).json(msg);
};
