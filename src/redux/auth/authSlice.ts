import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthAction, AuthState } from "./types";
import { User } from "../../types/user";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export const checkFromCache = createAsyncThunk(
  AuthAction.CheckFromCache,
  async () => {
    const userString = await AsyncStorage.getItem("user");

    if (!userString) {
      return null;
    }

    const user: User = JSON.parse(userString);

    return user;
  }
);

export const authenticate = createAsyncThunk(
  AuthAction.Authenticate,
  async (user: User) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  }
);

export const logout = createAsyncThunk(AuthAction.Logout, async () => {
  await AsyncStorage.removeItem("user");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkFromCache.fulfilled, (state, action) => {
      state.isAuthenticated = !!action.payload;
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(checkFromCache.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkFromCache.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
