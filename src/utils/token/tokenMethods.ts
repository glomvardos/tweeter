import { TokenMethodTypes } from "../../interfaces/token";
import { TokenMethodsInterface } from "./tokenMethods.interface";

const tokenMethods: TokenMethodsInterface = {
  saveToken: ({ token }: TokenMethodTypes) => {
    localStorage.setItem("accessToken", token.access);
  },

  removeToken: () => {
    localStorage.removeItem("accessToken");
  },

  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },
};

export default tokenMethods;
