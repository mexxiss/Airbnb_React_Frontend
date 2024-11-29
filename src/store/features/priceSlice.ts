import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PricingState } from "../../types/priceTypes";

const initialState: PricingState = {
  data: [],
  message: "",
  success: false,
  statusCode: 0,
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    setPricingData: (state, action: PayloadAction<PricingState>) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.statusCode = action.payload.statusCode;
    },
  },
});

export const { setPricingData } = pricingSlice.actions;

export default pricingSlice.reducer;
