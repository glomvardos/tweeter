import { UserTypes } from "../../interfaces/user";

export interface AuthTypes {
  token: string | null;
  authUser: UserTypes | null;
}
