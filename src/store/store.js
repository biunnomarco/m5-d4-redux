import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import commentsSlice from "./commentsSlice";
import cartSlice from "./cartSlice";
import detailsSlice from "./detailsSlice";
import offCanvasSlice from "./offCanvasSlice";


const store = configureStore({
    reducer: {
        books: bookSlice,
        comments: commentsSlice,
        cart: cartSlice,
        details: detailsSlice,
        myOffCanvas: offCanvasSlice,
    }
})

export default store;