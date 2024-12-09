import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Requirement } from "../../types/requirementTypes";

interface RequirementState {
  requirements: Requirement[];
}

const initialState: RequirementState = {
  requirements: [],
};

const requirementSlice = createSlice({
  name: "requirements",
  initialState,
  reducers: {
    setRequirements(state, action: PayloadAction<Requirement[]>) {
      state.requirements = action.payload;
    },
  },
});

export const { setRequirements } = requirementSlice.actions;
export default requirementSlice.reducer;
