import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { number } from "yup";
import { addcateNew, list, read, remove, update } from "../api/cateNew";
import { CateNewType } from "../types/cateNew";

type CateNewState ={
    value:CateNewType[]
}
const initialState:CateNewState ={
    value:[]
}
export const getcateNew = createAsyncThunk(
    "cateNew/getCateNew",
    async ()=>{
      const {data} =   await list()
      return data
    }
)
export const detaicateNew = createAsyncThunk(
    "cateNew/detailCateNew",
    async (_id:any)=>{
      const {data} =  await read(_id)
      return data
    }
)
export const createcateNew = createAsyncThunk(
    "cateNew/createCateNew",
    async (cateNew:CateNewType)=>{
        const {data} = await addcateNew(cateNew)
        return data
    }
)
export const removecateNew = createAsyncThunk(
    "cateNew/removeCateNew",
    async (id:any)=>{
        const {data} = await remove (id)
        return data
    }
)
export const updatecateNew = createAsyncThunk(
    "cateNew/updateCateNew",
    async (cateNew:CateNewType)=>{
        const {data} = await update (cateNew)
        return data
    }
)
const cateNewReducer = createSlice({
    name:"cateNew",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getcateNew.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(detaicateNew.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(createcateNew.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removecateNew.fulfilled,(state,action)=>{
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updatecateNew.fulfilled,(state,action)=>{
            state.value = state.value.map(item => item._id == action.payload._id?action.payload:item)
         })
    }
})
export const selectCateNew = (state: any) => state.cateNew.value;
export default cateNewReducer.reducer 