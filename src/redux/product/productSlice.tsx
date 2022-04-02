import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, list } from "../../api/products";

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async ()=>{
      const {data} =   await list()
      return data
    }
)
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (product)=>{
        const {data} = await addProduct(product)
        return data
    }
)
const productSlice = createSlice({
    name:"product",
    initialState:{
        value:[]
    },
    reducers:{
        createProduct(state,action){
            state.value.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
    }
})
export default productSlice.reducer 