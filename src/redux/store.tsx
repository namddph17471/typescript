import { configureStore, ThunkAction,Action } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import newReducer from "./newSlice"
import cateProductReducer from "./cateproductSlice"
import cateNewReducer from "./catenewSlice"
import authReducer from "./authSlice"
export const store = configureStore({
    reducer:{
        product:productReducer,
        cateProduct:cateProductReducer,
        auth:authReducer,
        new:newReducer,
        cateNew:cateNewReducer
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
