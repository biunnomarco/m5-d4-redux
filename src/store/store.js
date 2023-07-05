import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import commentsSlice from "./commentsSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        books: bookSlice,
        comments: commentsSlice,
        cart: cartSlice,
    }
})

export default store;