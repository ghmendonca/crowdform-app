import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import fundSlice from "./fund/fundSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    fund: fundSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
