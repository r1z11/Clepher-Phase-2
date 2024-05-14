import { createSlice } from '@reduxjs/toolkit';
import { PostEngagements } from '../../types';

interface Props {
    postEngagements: PostEngagements[] | null;
}

const initialState: Props = {
    postEngagements: null,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updatePostEngagements: (state, action) => {
            state.postEngagements = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { updatePostEngagements } = dataSlice.actions;

export default dataSlice.reducer;