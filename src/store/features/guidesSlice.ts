import { IGuide } from "./../../types/guideTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GuidesState {
  guides: IGuide[];
}

const initialState: GuidesState = {
  guides: [],
};

const guidesSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    setGuides(state, action: PayloadAction<IGuide[]>) {
      state.guides = action.payload;
    },
  },
});

export const { setGuides } = guidesSlice.actions;
export default guidesSlice.reducer;
