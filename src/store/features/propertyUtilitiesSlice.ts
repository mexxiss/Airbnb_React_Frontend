// store/slices/utilitiesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OtherUtilities, PropertyUtilities, RequiredUtility } from '../../types/uiltiliyProvidersTypes';

interface PropertyUtilitiesState {
    utilities: PropertyUtilities | null;
}

const initialState: PropertyUtilitiesState = {
    utilities: null,
};

const propertyUtilitiesSlice = createSlice({
    name: 'utilities',
    initialState,
    reducers: {
        setUtilities(state, action: PayloadAction<PropertyUtilities>) {
            state.utilities = action.payload;
        },
        addUtility(state, action: PayloadAction<OtherUtilities>) {
            if (state.utilities) {
                state.utilities['other'].push(action.payload);
            }
        },
        deleteUtility(state, action: PayloadAction<Number>) {
            if (state.utilities) {
                state.utilities['other'] = state.utilities['other'].filter(utility => utility.temp_id !== action.payload);
            }
        },
        updateRequiredUtility(state, action: PayloadAction<RequiredUtility | undefined>) {
            if (!action.payload || !state.utilities) return;
            (state.utilities as any)[action.payload.field_name] = action.payload;
        },
        updateOtherUtility(state, action: PayloadAction<OtherUtilities | undefined>) {
            if (!action.payload || !state.utilities?.other) return;
            console.log("Other Utility: ", action.payload)
            state.utilities.other = state.utilities.other.map((utility) => 
                utility.temp_id === action.payload!.temp_id ? action.payload! : utility
            );
        }
    },
});

export const { setUtilities, addUtility, deleteUtility, updateRequiredUtility, updateOtherUtility} = propertyUtilitiesSlice.actions;
export default propertyUtilitiesSlice.reducer;
