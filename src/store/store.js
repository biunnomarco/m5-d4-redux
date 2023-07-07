import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import commentsSlice from "./commentsSlice";
import cartSlice from "./cartSlice";
import detailsSlice from "./detailsSlice";


const store = configureStore({
    reducer: {
        books: bookSlice,
        comments: commentsSlice,
        cart: cartSlice,
        details: detailsSlice,
    }
})

export default store;