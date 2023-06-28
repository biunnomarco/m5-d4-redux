import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import commentsSlice from "./commentsSlice";


const store = configureStore({
    reducer: {
        books: bookSlice,
        comments: commentsSlice,
    }
})

export default store;