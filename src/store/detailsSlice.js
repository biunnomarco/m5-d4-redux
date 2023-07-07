import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";



const endpoint = 'https://epibooks.onrender.com/'

const initialState = {
    details: [],
    status: 'idle',
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getDetails.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getDetails.fulfilled, (state, action) => {
            state.status = 'idle';
            state.details = action.payload[0]
        })
        .addCase(getDetails.rejected, (state) => {
            state.status = 'error'
        })
    }
})


export const {setStatus} = detailsSlice.actions;
export default detailsSlice.reducer;

export const getDetails = createAsyncThunk('details/get', async (asin) => {
    const data = await fetch(endpoint + asin);
    const res = await data.json();
    return res
})
