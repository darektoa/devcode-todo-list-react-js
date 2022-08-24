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

        remove(state, action) {
            const id    = Number(action.payload.id);
            const index = state.data.findIndex((item) => item.id === id);
            state.data.splice(index, 1);
        },

        init(state, action) {
            state.data = action.payload;
        }
    }
});

export default activitySlice.reducer;
export const {
    create,
    remove,
    init,
} = activitySlice.actions;