import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGallaryData } from "../../types/gallarytypes";

interface GallaryState {
    data: IGallaryData[] | null;
}

const initialState: GallaryState = {
    data: null
}

const gallarySlice = createSlice({
    name: "gallary",
    initialState,
    reducers: {
        setGallary: (state, action: PayloadAction<IGallaryData[]>) => {
            state.data = action.payload
        }
    }
});

export const { setGallary } = gallarySlice.actions;
export default gallarySlice.reducer;