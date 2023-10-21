import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/NotificationSchema';

const initialState: NotificationSchema = {
    
};

export const NotificationSlice = createSlice({
    name: 'Notification',
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

export const { actions: NotificationActions } = NotificationSlice;
export const { reducer: NotificationReducer } = NotificationSlice;