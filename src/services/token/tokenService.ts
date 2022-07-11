import { TokenServiceTypes } from "../../interfaces/token";
import { TokenServiceInterface } from "./tokenService.interface";

class TokenService implements TokenServiceInterface {
  public saveToken({ token }: TokenServiceTypes) {
    localStorage.setItem("accessToken", token.access);
  }

  public removeToken() {
    localStorage.removeItem("accessToken");
  }

  public getAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken;
  }
}

export default new TokenService();
