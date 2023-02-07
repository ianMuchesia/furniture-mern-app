import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel, ProductArrayModel } from "../@types/type";

const initialProductState: ProductArrayModel = {
  allProducts: [],
  singleProduct: {
    _id: "",
    name: "",
    description: "",
    price: 0,
    featured: false,
    imageUrl: "",
    brand:"",
    rating:0,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductModel[]>) {
      state.allProducts = action.payload;
    },
    setSingleProduct(state, action: PayloadAction<ProductModel>) {
      state.singleProduct = action.payload;
    },
  },
});

export default productSlice;
