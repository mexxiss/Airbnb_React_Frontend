// store/features/countrySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryState {
  countryCode: string | null;
  phone: string | null | undefined;
}

const initialState: CountryState = {
  countryCode: null,
  phone: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry(state, action: PayloadAction<string>) {
      state.countryCode = action.payload;
    },
    setPhone(state, action: PayloadAction<string | null | undefined>) {
      state.phone = action.payload;
    },
  },
});

export const { setCountry, setPhone } = countrySlice.actions;

export default countrySlice.reducer;
