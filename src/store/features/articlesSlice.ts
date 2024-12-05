// store/slices/articlesSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../types/articleTypes";

interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
