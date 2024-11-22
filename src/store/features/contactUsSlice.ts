import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactData, ContactState } from "../../types/contactTypes";

// Initial state
const initialState: ContactState = {
  data: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<ContactData>) => {
      state.data = action.payload;
    },
  },
});

// Actions and reducer export
export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;
