import {
  contentInterface,
  stantardResType,
  statusInterface,
} from "../types/jsonTypes";

type createMessageType = (
  status: statusInterface,
  content: contentInterface
) => stantardResType;

export const createMessage: createMessageType = (status, content) => {
  const msg: stantardResType = {
    status: {
      ok: status.ok,
    },
    content: {
      message: content.message,
    },
  };

  if (!status.ok) {
    msg.status.errorMsg = status.errorMsg;
  }

  if (content.payload) {
    msg.content.payload = content.payload;
  }

  return msg;
};
