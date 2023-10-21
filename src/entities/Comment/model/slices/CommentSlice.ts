import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentSchema } from '../types/CommentSchema';

const initialState: CommentSchema = {
    
};

export const CommentSlice = createSlice({
    name: 'Comment',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: CommentActions } = CommentSlice;
export const { reducer: CommentReducer } = CommentSlice;