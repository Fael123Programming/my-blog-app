import {
    configureStore,
    ThunkAction,
    Action
} from '@reduxjs/toolkit';
import userDataReducer from '../features/userData/userDataSlice';
import relevantDiscussionsReducer from '../features/relevantDiscussions/relevantDiscussionsSlice';

export const store = configureStore({
    reducer: {
        userData: userDataReducer,
        relevantDiscussions: relevantDiscussionsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<String>
>;