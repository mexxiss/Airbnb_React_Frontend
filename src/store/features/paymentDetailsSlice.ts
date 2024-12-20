import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentDetails } from "../../types/paymentsTypes";

interface PaymentDetailsState {
  data: PaymentDetails | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PaymentDetailsState = {
  data: null,
  isLoading: false,
  error: null,
};

const paymentDetailsSlice = createSlice({
  name: "paymentDetails",
  initialState,
  reducers: {
    setPaymentDetails: (state, action: PayloadAction<PaymentDetails>) => {
      state.data = action.payload;
    },
  },
});

export const { setPaymentDetails } = paymentDetailsSlice.actions;

export default paymentDetailsSlice.reducer;
