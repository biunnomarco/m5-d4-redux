import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

const offCanvasSlice = createSlice({
    name: 'myOffCanvas',
    initialState,
    reducers: {
        setOffCanvas(state, action) {
            state.show = action.payload
        }
    }
})

export default offCanvasSlice.reducer
export const {setOffCanvas} = offCanvasSlice.actions;