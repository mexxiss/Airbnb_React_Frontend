import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/userDetailsTypes";

interface UserState {
  user: UserDetails | null;
}

const initialState: UserState = {
  user: null,
};

const userDetailsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<UserDetails>) {
      state.user = action.payload;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
