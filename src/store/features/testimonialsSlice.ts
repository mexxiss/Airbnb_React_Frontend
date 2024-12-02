import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Testimonial } from "../../types/testimonials";

interface TestimonialsState {
  testimonials: Testimonial[];
}

const initialState: TestimonialsState = {
  testimonials: [],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setTestimonials(state, action: PayloadAction<Testimonial[]>) {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
