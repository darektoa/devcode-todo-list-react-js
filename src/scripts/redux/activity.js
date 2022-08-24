import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        data: [],
    },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
        },

        init(state, action) {
            state.data = action.payload;
        }
    }
});

export default activitySlice.reducer;
export const {
    create,
    init
} = activitySlice.actions;