import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { number, string } from "yup";
import { addProduct, list, productRelated, read, remove, update } from "../api/products";
import { ProductType } from "../types/product";

type ProductState = {
    value:ProductType[],
    totalProduct: number
}
  const initialState:ProductState={
      value:[],
      totalProduct:0
  }
export const getProduct = createAsyncThunk(
    "product/getProduct",
    async ()=>{
      const {data} = await list()
      return data
    }
)
export const getProductPagination = createAsyncThunk(
    "product/getProductPagination",
    async ({ start, limit }: { start: number, limit: number })=>{
        const { data } = await list();
        const totalProduct = data.length;

        const { data: productsData } = await list(start, limit);

        return { totalProduct, productsData };
    }
)
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (product:ProductType)=>{
        const {data} = await addProduct(product)
        return data
    }
)
export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async (id:any)=>{
        const {data} = await remove (id)
        return data
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (product:ProductType)=>{
        const {data} = await update (product)
        return data
    }
)
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(getProductPagination.fulfilled, (state,{payload})=>{
            state.value = payload.productsData
            state.totalProduct = payload.totalProduct
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
export const selectProduct = (state: any) => state.product.value;
export const selectTotalProduct = (state: any) => state.product.totalProduct;
export default productSlice.reducer 