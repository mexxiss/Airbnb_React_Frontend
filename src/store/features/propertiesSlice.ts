import { Property, PropertyByIdResponse } from "./../../types/propertiesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertiesState {
  properties: Property[];
  selectedProperty: PropertyByIdResponse | null;
}

const initialState: PropertiesState = {
  properties: [],
  selectedProperty: null,
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties(state, action: PayloadAction<Property[]>) {
      state.properties = action.payload;
    },
    setSelectedProperty(
      state,
      action: PayloadAction<PropertyByIdResponse | null>
    ) {
      state.selectedProperty = action.payload;
    },
  },
});

export const { setProperties, setSelectedProperty } = propertiesSlice.actions;
export default propertiesSlice.reducer;
