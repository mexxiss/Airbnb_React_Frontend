// store/slices/utilitiesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Utility {
  _id: string;
  name: string;
  provider_name: string;
  account_no: string;
  paid_by: string;
  web_login: string;
  web_pass: string;
  user_id: string;
  type: string;
  already_have_account: boolean;
  property: string;
  createdAt: string;
  updatedAt: string;
}

interface UtilitiesState {
  utilities: Utility[];
}

const initialState: UtilitiesState = {
  utilities: [],
};

const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    setFetchUtilities(state, action: PayloadAction<Utility[]>) {
      state.utilities = action.payload;
    },
  },
});

export const { setFetchUtilities } = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
