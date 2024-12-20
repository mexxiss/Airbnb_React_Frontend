import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types for Service Providers and State
interface ServiceProvider {
  name: string;
  _id: string;
}

interface ServiceCategory {
  service_providers: ServiceProvider[];
}

interface ProvidersState {
  internet: ServiceCategory | null;
  electricity_water: ServiceCategory | null;
  gas: ServiceCategory | null;
  chiller: ServiceCategory | null;
  other: ServiceCategory | null;
}

const initialState: ProvidersState = {
  internet: null,
  electricity_water: null,
  gas: null,
  chiller: null,
  other: null,
};

// Create Slice
const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    setProvidersServices(
      state,
      action: PayloadAction<{
        internet: ServiceCategory;
        electricity_water: ServiceCategory;
        gas: ServiceCategory;
        chiller: ServiceCategory;
        other: ServiceCategory;
      }>
    ) {
      state.internet = action.payload.internet;
      state.electricity_water = action.payload.electricity_water;
      state.gas = action.payload.gas;
      state.chiller = action.payload.chiller;
      state.other = action.payload.other;
    },
  },
});

// Export Actions and Reducer
export const { setProvidersServices } = providersSlice.actions;
export default providersSlice.reducer;
