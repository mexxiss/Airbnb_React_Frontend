import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGallaryTypesData } from "../../types/gallaryTabTypes"

interface GallaryTypeState {
    data: IGallaryTypesData[] | null;
}

const initialState: GallaryTypeState = {
    data: null,
}

const gallaryTypeSlice = createSlice({
    name: "gallarytypes",
    initialState,
    reducers: {
        setGallaryTypes: (state, action: PayloadAction<IGallaryTypesData[]>) => {
            state.data = action.payload
        }
    }
})

export const {setGallaryTypes} = gallaryTypeSlice.actions;
export default gallaryTypeSlice.reducer;