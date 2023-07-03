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
    data: fantasy, history, horror, scifi, romance,
    filteredData: fantasy, history, horror, scifi, romance,
    genre: 'All Books',
    allGenres,
    SelectedBook: '',
}
const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        selectedBook(state, action) {
            state.SelectedBook = action.payload
        },
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


export const { showGenre, nameGenre, searchBook, selectedBook } = bookSlice.actions;
export default bookSlice.reducer