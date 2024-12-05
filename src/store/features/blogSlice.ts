import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Blog } from "../../types/blogTypes";

interface BlogsState {
  blogs: Blog[];
}

const initialState: BlogsState = {
  blogs: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
