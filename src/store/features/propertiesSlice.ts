import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Property {
  id: number;
  name: string;
  // Add fields according to your API response
}

interface PropertiesState {
  properties: Property[];
}

const initialState: PropertiesState = {
  properties: [],
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.properties = action.payload;
    },
  },
});

export const { setProperties } = propertiesSlice.actions;

export default propertiesSlice.reducer;
