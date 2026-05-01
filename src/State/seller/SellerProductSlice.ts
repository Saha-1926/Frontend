import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../Type/ProductType";

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  "/sellerProduct/fetchSellerProducts",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/sellers/products", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      console.log("fetch seller products ", data);
      return data;
      console.log("fetch seller products ", response.data);
    } catch (error: any) {
      console.log("error - - - ", error);
      return rejectWithValue(error.response?.data || error.message); // ✅ FIX
    }
  }
);

export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string | null }
>(
  "/sellerProduct/createProduct",
  async (args, { rejectWithValue }) => {
    const { request, jwt } = args;
    try {
      const response = await api.post(`/api/sellers/products`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create product response ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error - - - ", error);
      return rejectWithValue(error.response?.data || error.message); // ✅ FIX
    }
  }
);

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
 extraReducers: (builder) => {
  builder
    .addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchSellerProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(fetchSellerProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(createProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.products.push(action.payload);
      }
    })
    .addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
}
  });


export default sellerProductSlice.reducer;