import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  EntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const BASEURL = "https://dummyjson.com/products";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number | null;
  discountPercentage: number | null;
  rating: number | null;
  stock: number | null;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[] | [];
};

const productsAdapter: EntityAdapter<Product, any> = createEntityAdapter({
  selectId: (product: Product) => product.title,
});

let pag_initial: {
  total: number | null;
  skip: number | null;
} = {
  total: null,
  skip: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ skip }: { skip: number }) => {
    const response = await fetch(`${BASEURL}?limit=10&skip=0`);
    const data = await response.json();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(pag_initial),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productsAdapter.upsertMany(state, action.payload.products);
        state.total = action.payload.total;
        state.skip = action.payload.skip;
      });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;

export const {
  selectAll: selectAllProducts,
  selectIds: selectAllIds,
  selectById,
  selectTotal,
} = productsAdapter.getSelectors((state: any) => state.products);
