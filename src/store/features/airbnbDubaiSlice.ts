import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AirbnbDubaiResponse } from "../../types/airbnbDubaiTypes.ts";

interface AirbnbDubaiState {
    data: AirbnbDubaiResponse | null
}

const initialState: AirbnbDubaiState = {
    data: null,
}

const airbnbDubaiSlice = createSlice({
    name: "airbnb dubai",
    initialState,
    reducers: {
        setAirbnbDubai(state, action: PayloadAction<AirbnbDubaiResponse>) {
            state.data = action.payload
        }
    }
});

export const { setAirbnbDubai } = airbnbDubaiSlice.actions;
export default airbnbDubaiSlice.reducer;