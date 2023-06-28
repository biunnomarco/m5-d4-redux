import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import fantasy from '../JSON/fantasy.json'
import horror from '../JSON/horror.json'
import scifi from '../JSON/scifi.json'
import romance from '../JSON/romance.json'
import history from '../JSON/history.json'

const allGenres = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    scifi: scifi,
    romance: romance,
}

const initialState = {
    data: [],
    filteredData: [],
    genre: '',
    allGenres,

}
const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        showGenre(state, action) {
            state.data = action.payload;
            state.filteredData = action.payload;
        },
        nameGenre(state, action) {
            state.genre = action.payload
        },
        searchBook(state, action) {
            state.data = state.filteredData.filter((book) => 
                book.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})


export const { showGenre, nameGenre, searchBook } = bookSlice.actions;
export default bookSlice.reducer