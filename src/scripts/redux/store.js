import { activityReducer } from '.';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        activity: activityReducer,
    }
});