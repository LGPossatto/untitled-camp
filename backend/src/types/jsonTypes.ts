export interface statusInterface {
  ok: boolean;
  errorMsg: string | null;
  stack: string | null | undefined;
}

export interface contentInterface {
  message: string;
  payload: any;
}

export type stantardJsonType = {
  status: statusInterface;
  content: contentInterface | null;
};
