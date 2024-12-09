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
    userFetched(state, action: PayloadAction<UserDetails>) {
      state.user = action.payload;
    },
  },
});

export const { userFetched } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
