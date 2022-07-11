import { TokenServiceTypes } from "../../interfaces/token";

export interface TokenServiceInterface {
  saveToken({ token }: TokenServiceTypes): void;

  removeToken(): void;

  getAccessToken(): string | null;
}
