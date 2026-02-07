import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {notify} from "../../Utils/Notify.jsx";


const URL = "http://localhost:4000/products"

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios.get(URL)
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


export const handleAddProduct = createAsyncThunk(
    'products/handleAddProduct',
    async ({name, price, description}, {rejectWithValue}) => {
       try {
           const res = await axios.post(URL, {name, price, description});
           notify("Product added successfully.");
           return res.data
       }catch(err) {
           notify(err.message, "red")
           return rejectWithValue(err.message)
       }
    }
)


export const handleDeleteProduct = createAsyncThunk(
    'products/handleDeleteProduct',
    async (id, {rejectWithValue}) => {
        try {
            const res = await axios.delete(`${URL}/${id}`);
            notify("Product deleted successfully.");
            return res.data
        }catch(err) {
            return rejectWithValue(err.message)
        }
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(handleAddProduct.fulfilled, (state, action) => {
                state.products = [...state.products, action.payload]
            })
            .addCase(handleDeleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product.id !== action.payload.id)
            })
    },
})


export default productsSlice.reducer