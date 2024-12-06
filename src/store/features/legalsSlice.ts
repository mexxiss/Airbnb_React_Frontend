import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Legal } from "../../types/legalTypes";

interface LegalsState {
  legals: Legal[];
}

const initialState: LegalsState = {
  legals: [],
};

const legalsSlice = createSlice({
  name: "legals",
  initialState,
  reducers: {
    setLegals(state, action: PayloadAction<Legal[]>) {
      state.legals = action.payload;
    },
  },
});

export const { setLegals } = legalsSlice.actions;
export default legalsSlice.reducer;
