import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cateProductReducer from "./cateproductSlice"
export const store = configureStore({
    reducer:{
        product:productReducer,
        cateProduct:cateProductReducer
    }
})