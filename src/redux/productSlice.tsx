import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, list, read, remove, update } from "../api/products";

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async ()=>{
      const {data} =   await list()
      return data
    }
)
export const detaiProduct = createAsyncThunk(
    "product/detailProduct",
    async (_id)=>{
      const {data} =   await read(_id)
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
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (product)=>{
        const {data} = await update (product)
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
        updateProduct(state,action){
            state.value = state.value.map(item => item._id == action.payload._id?action.payload:item)
        },
        removeProduct(state,action){
            state.value.filter(item => item.id !== action.payload._id)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(detaiProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removeProduct.fulfilled,(state,action)=>{
           state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateProduct.fulfilled,(state,action)=>{
            state.value = state.value.map(item => item._id == action.payload._id?action.payload:item)
         })
    }
})
export default productSlice.reducer 