// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginResponse } from "../../types/loginTypes";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.user.accessToken;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload.data.user.accessToken); // Store token in localStorage
    },
    clearLoginData: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken"); // Remove token from localStorage
    },
  },
});

export const { setLoginData, clearLoginData } = authSlice.actions;

export default authSlice.reducer;
