import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { number } from "yup";
import { addCateProduct, list, read, remove, update } from "../api/cateProduct";
import { CateProductType } from "../types/cateProduct";

type CateProductState ={
    value:CateProductType[]
}
const initialState:CateProductState ={
    value:[]
}
export const getcateProduct = createAsyncThunk(
    "cateProduct/getCateProduct",
    async ()=>{
      const {data} =   await list()
      return data
    }
)
export const detaicateProduct = createAsyncThunk(
    "cateProduct/detailCateProduct",
    async (_id:any)=>{
      const {data} =  await read(_id)
      return data
    }
)
export const createcateProduct = createAsyncThunk(
    "cateProduct/createCateProduct",
    async (cateProduct:CateProductType)=>{
        const {data} = await addCateProduct(cateProduct)
        return data
    }
)
export const removecateProduct = createAsyncThunk(
    "cateProduct/removeCateProduct",
    async (id:any)=>{
        const {data} = await remove (id)
        return data
    }
)
export const updatecateProduct = createAsyncThunk(
    "cateProduct/updateCateProduct",
    async (cateProduct:CateProductType)=>{
        const {data} = await update (cateProduct)
        return data
    }
)
const cateProductSlice = createSlice({
    name:"cateProduct",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getcateProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(detaicateProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(createcateProduct.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removecateProduct.fulfilled,(state,action)=>{
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updatecateProduct.fulfilled,(state,action)=>{
            state.value = state.value.map(item => item._id == action.payload._id?action.payload:item)
         })
    }
})
export const selectCateProduct = (state: any) => state.cateProduct.value;
export default cateProductSlice.reducer 