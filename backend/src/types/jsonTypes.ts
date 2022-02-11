export interface statusInterface {
  ok: boolean;
  errorMsg?: string;
}

export interface contentInterface {
  message: string;
  payload?: any;
}

export type stantardResType = {
  status: statusInterface;
  content: contentInterface;
};
