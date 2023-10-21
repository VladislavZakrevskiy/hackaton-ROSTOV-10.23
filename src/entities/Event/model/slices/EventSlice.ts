import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventSchema } from '../types/EventSchema';

const initialState: EventSchema = {
    
};

export const EventSlice = createSlice({
    name: 'Event',
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

export const { actions: EventActions } = EventSlice;
export const { reducer: EventReducer } = EventSlice;