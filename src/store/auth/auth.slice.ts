import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenTypes } from "../../interfaces/token";
import { AuthTypes } from "./auth.interface";
import tokenMethods from "../../utils/token/tokenMethods";
import { UserTypes } from "../../interfaces/user";

const initialState: AuthTypes = {
  token: tokenMethods.getAccessToken(),
  authUser: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<TokenTypes>) => {
      state.token = action.payload.access;
      tokenMethods.saveToken({ token: action.payload });
    },
    saveAuthUser: (state, action: PayloadAction<UserTypes>) => {
      state.authUser = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.authUser = null;
      tokenMethods.removeToken();
    },
  },
});

export const { saveToken, saveAuthUser, logout } = AuthSlice.actions;

export default AuthSlice;
