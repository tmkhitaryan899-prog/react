import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./Slices/ProductsSlice.js";


export const store = configureStore({
    reducer: {
        products: productsReducer
    }
});