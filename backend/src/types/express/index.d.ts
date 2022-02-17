import { userType } from "../userTypes";

declare module "express-serve-static-core" {
  interface Request {
    user: userType;
  }
}
