import { configureStore, ThunkAction,Action } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cateProductReducer from "./cateproductSlice"
export const store = configureStore({
    reducer:{
        product:productReducer,
        cateProduct:cateProductReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
