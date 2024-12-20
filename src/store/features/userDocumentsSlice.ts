import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentProps, DocumentState } from "../../types/documentTypes";

const initialState: DocumentState = {
  docs: [],
};

const userDocumentsSlice = createSlice({
  name: "userDocuments",
  initialState,
  reducers: {
    setDocuments(state, action: PayloadAction<DocumentState>) {
      state.docs = action.payload.docs;
    },
  },
});

export const { setDocuments } = userDocumentsSlice.actions;
export default userDocumentsSlice.reducer;
