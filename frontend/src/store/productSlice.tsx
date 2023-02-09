import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel, ProductArrayModel } from "../@types/type";

const initialProductState: ProductArrayModel = {
  allProducts: [],
  featuredProducts:[],
  categoryProducts:[],
  singleProduct: {
    _id: "",
    name: "",
    description: "",
    price: 0,
    featured: false,
    imageUrl: "",
    brand:"",
    rating:0,
    category:"",
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
    setFeaturedProduct(state, action: PayloadAction<ProductModel[]>) {
      state.featuredProducts = action.payload;
    },
    setCategoryProduct(state, action: PayloadAction<ProductModel[]>) {
      state.categoryProducts = action.payload;
    },
  },
});

export default productSlice;
