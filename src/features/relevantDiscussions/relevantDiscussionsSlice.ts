import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchRelevantDiscussionsAsync } from '../../../service';

interface RelevantDiscussionsState {
    value: object;
    status: 'idle' | 'loading' | 'failed';
}

const initialState : RelevantDiscussionsState = {
    value: {},
    status: 'idle',
};

export const setRelevantDiscussionsAsync = createAsyncThunk<
    object,
    {state: {relevantDiscussions: RelevantDiscussionsState}}
>('relevantDiscussions/fetchRelevantDiscussions', async () => {
    return await fetchRelevantDiscussionsAsync();
});

export const relevantDiscussionsSlice = createSlice({
    name: 'relevantDiscussions',
    initialState,
    reducers: {
        setRelevantDiscussionsMock: state => {
            state.value = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setRelevantDiscussionsAsync.pending, state => {
            state.status = 'loading';
        })
        .addCase(setRelevantDiscussionsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
        });
    },
});

export const { setRelevantDiscussionsMock } = relevantDiscussionsSlice.actions;
export const selectRelevantDiscussions = (state: RootState) => state.relevantDiscussions;
export default relevantDiscussionsSlice.reducer;
