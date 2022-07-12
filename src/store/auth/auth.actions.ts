import { AppDispatch } from "../store";
import apiService from "../../services/api/apiService";
import { toast } from "react-toastify";
import { saveAuthUser } from "./auth.slice";

export const getAuthUser = () => {
  return async (dispatch: AppDispatch) => {
    apiService
      .getAuthUser()
      .then((res) => {
        dispatch(saveAuthUser(res?.data));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
