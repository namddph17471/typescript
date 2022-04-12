import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOneUser, getUser, update } from "../api/users";
import { UserType } from "../types/user";
type AuthState = {
    value: UserType[]
}
const initialState:AuthState = {
    value:[]
}
export const getAuth = createAsyncThunk(
    "auth/getAuth",
    async ()=>{
        const {data} = await getUser()
        return data
    }
)
export const updateMyAccount = createAsyncThunk(
    "auth/updateMyAccount",
    async (dataAuth:UserType) => {
        const {data} = await update (dataAuth)
        return data
    }
)
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAuth.fulfilled,(state,action)=>{
            state.value = action.payload
        })
        builder.addCase(updateMyAccount.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id == payload._id?payload:item)
        })
    }
})
export const selectAuth = (state: any) => state.auth.value;
export default authSlice.reducer