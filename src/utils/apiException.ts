import { AxiosError } from "axios";
import { ServerError } from "../interfaces/api";
import { HttpStatus } from "../enums/HttpStatus";

export const apiException = (error: AxiosError<ServerError>) => {
  if (
    error &&
    (error.response?.status === HttpStatus.UNAUTHORIZED ||
      error.response?.status === HttpStatus.FORBIDDEN ||
      error.response?.status === HttpStatus.BAD_REQUEST)
  ) {
    throw new Error(error.response.data.message);
  }
  throw new Error("Something went wrong");
};
