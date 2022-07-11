import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
