import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEstimateRevenueDoc } from '../../types/estimateRevenueTypes';

interface EstimateRevenueState {
    data: IEstimateRevenueDoc[] | null;
}

const initialState: EstimateRevenueState = {
    data: null,
};

const estimateRevenueSlice = createSlice({
    name: 'estimateRevenue',
    initialState,
    reducers: {
        setEstimateRevenueData(state, action: PayloadAction<IEstimateRevenueDoc[]>) {
            state.data = action.payload;
        },
    },
});

export const { setEstimateRevenueData } = estimateRevenueSlice.actions;
export default estimateRevenueSlice.reducer;