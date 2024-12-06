// store/slices/blogsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Blog, RelatedBlog } from "../../types/blogTypes";

interface BlogsState {
  blogs: Blog[];
  selectedBlog: Blog | null;
  relatedBlogs: RelatedBlog[] | null | undefined;
}

const initialState: BlogsState = {
  blogs: [],
  selectedBlog: null,
  relatedBlogs: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
    setSelectedBlog(
      state,
      action: PayloadAction<{ blog: Blog; relatedBlogs: RelatedBlog[] }>
    ) {
      state.selectedBlog = action.payload.blog;
      state.relatedBlogs = action.payload.relatedBlogs;
    },
  },
});

export const { setBlogs, setSelectedBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
