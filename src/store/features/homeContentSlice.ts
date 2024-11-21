import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHomeContentData } from "../../types/homeContentTypes";

interface HomeContentState {
  data: IHomeContentData | null;
}

const initialState: HomeContentState = {
  data: null,
};

const homeContentSlice = createSlice({
  name: "homeContent",
  initialState,
  reducers: {
    setHomeContent: (state, action: PayloadAction<IHomeContentData>) => {
      state.data = action.payload;
    },
  },
});

export const { setHomeContent } = homeContentSlice.actions;

export default homeContentSlice.reducer;
