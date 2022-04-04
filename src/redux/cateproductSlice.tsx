import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCateProduct, list, read, remove, update } from "../api/cateProduct";

export const getcateProduct = createAsyncThunk(
    "cateProduct/getCateProduct",
    async ()=>{
      const {data} =   await list()
      return data
    }
)
export const detaicateProduct = createAsyncThunk(
    "cateProduct/detailCateProduct",
    async (_id)=>{
      const {data} =   await read(_id)
      return data
    }
)
export const createcateProduct = createAsyncThunk(
    "cateProduct/createCateProduct",
    async (cateProduct)=>{
        const {data} = await addCateProduct(cateProduct)
        return data
    }
)
export const removecateProduct = createAsyncThunk(
    "cateProduct/removeCateProduct",
    async (id)=>{
        const {data} = await remove (id)
        return data
    }
)
export const updatecateProduct = createAsyncThunk(
    "cateProduct/updateCateProduct",
    async (cateProduct)=>{
        const {data} = await update (cateProduct)
        return data
    }
)
const cateProductSlice = createSlice({
    name:"catecateProduct",
    initialState:{
        value:[]
    },
    reducers:{
        createCateProduct(state,action){
            state.value.push(action.payload)
        },
        updateCateProduct(state,action){
            state.value = state.value.map(item => item._id == action.payload._id?action.payload:item)
        },
        removeCateProduct(state,action){
            state.value.filter(item => item.id !== action.payload._id)
        }
    },
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
export default cateProductSlice.reducer 