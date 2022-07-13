import { TokenMethodTypes } from "../../interfaces/token";

export interface TokenMethodsInterface {
  saveToken({ token }: TokenMethodTypes): void;

  removeToken(): void;

  getAccessToken(): string | null;
}
