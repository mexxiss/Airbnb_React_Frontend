import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"), // Initialize with token from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Store token in localStorage
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("token"); // Clear token from localStorage
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
