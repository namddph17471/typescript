import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { number, string } from "yup";
import {  list, remove, update,addNew } from "../api/news";
import { NewType } from "../types/new";

type NewState = {
    value:NewType[]
}
  const initialState:NewState={
      value:[]
  }
export const getNew = createAsyncThunk(
    "new/getNew",
    async ()=>{
      const {data} = await list()
      return data
    }
)
export const createNew = createAsyncThunk(
    "new/createNew",
    async (post:NewType)=>{
        const {data} = await addNew(post)
        return data
    }
)
export const removeNew = createAsyncThunk(
    "new/removeNew",
    async (id:any)=>{
        const {data} = await remove (id)
        return data
    }
)
export const updateNew = createAsyncThunk(
    "new/updateNew",
    async (post:NewType)=>{
        const {data} = await update (post)
        return data
    }
)
const newSLice = createSlice({
    name:"new",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getNew.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(createNew.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removeNew.fulfilled,(state,action)=>{
           state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateNew.fulfilled,(state,action)=>{
            state.value = state.value.map(item => item._id == action.payload._id?action.payload:item)
         })
    }
})
export default newSLice.reducer 