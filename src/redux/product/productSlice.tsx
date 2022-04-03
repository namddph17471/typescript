import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, list, remove } from "../../api/products";

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
export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async (id)=>{
        const {data} = await remove (id)
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
        },
        removeProduct(state,action){
            state.value.filter(item => item.id !== action.payload._id)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removeProduct.fulfilled,(state,action)=>{
           state.value = state.value.filter(item => item._id !== action.payload._id)
            console.log(state.value)
        })
    }
})
export default productSlice.reducer 