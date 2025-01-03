import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Legal } from "../../types/legalTypes";

interface LegalsState {
  legals: Legal | null;
}

const initialState: LegalsState = {
  legals: null,
};

const legalsSlice = createSlice({
  name: "legals",
  initialState,
  reducers: {
    setLegals(state, action: PayloadAction<Legal>) {
      state.legals = action.payload;
    },
  },
});

export const { setLegals } = legalsSlice.actions;
export default legalsSlice.reducer;
