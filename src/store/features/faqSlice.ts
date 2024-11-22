import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFaqData } from "../../types/faqTypes";

interface FaqState {
    data: IFaqData[] | null;
}

const initialState: FaqState = {
    data: null
}

const faqSlice = createSlice({
    name: "faq",
    initialState,
    reducers: {
        setFaqs: (state, action: PayloadAction<IFaqData[]>) => {
            state.data = action.payload
        }
    }
});

export const {setFaqs} = faqSlice.actions;
export default faqSlice.reducer;