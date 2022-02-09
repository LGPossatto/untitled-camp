export interface statusInterface {
  ok: boolean;
  errorMsg?: string;
}

export interface contentInterface {
  message: string;
}

export type stantardResType = {
  status: statusInterface;
  content: contentInterface;
};
