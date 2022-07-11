import { AxiosResponse } from "axios";
import { LoginTypes, RegisterTypes } from "../../interfaces/auth";

export interface AuthServiceInterface {
  login({
    email,
    password,
  }: LoginTypes): Promise<AxiosResponse<any, any> | undefined>;

  register({
    firstname,
    lastname,
    email,
    password,
  }: RegisterTypes): Promise<AxiosResponse<any, any> | undefined>;

  getAuthUser(): Promise<AxiosResponse<any, any> | undefined>;
}
