import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel, ProductArrayModel } from "../@types/type";

const initialProductState = {
  allProducts: [] as ProductModel[],
  length: 0,
  singleProduct: {} as ProductModel,
  categoryProducts: [] as ProductModel[],
  filteredProducts: [] as ProductModel[],
  categoryFilter: "",
  brandFilter: "",
  priceRange: 0,
  searchFilter:"",
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductModel[]>) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
      state.length = state.allProducts.length;
    },
    setProductsByCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      state.categoryProducts = state.allProducts.filter(
        (product) => product.category === category
      );
      state.categoryProducts = state.categoryProducts.filter(
        (product) => product._id !== category
      );
      state.length = state.allProducts.length;
    },
    setCategoryFilter(state, action: PayloadAction<string>) {
      state.categoryFilter = action.payload;
    },
    setBrandFilter(state, action: PayloadAction<string>) {
      state.brandFilter = action.payload;
    },
    setPriceRange(state, action: PayloadAction<number>) {
      state.priceRange = action.payload;
    },
    setSearchTerm(state, action:PayloadAction<string>){
      state.searchFilter = action.payload;
    },
    filterProducts(state) {
      let filteredProducts = [...state.allProducts];
      if(state.categoryFilter === ""){
        filteredProducts = [...state.allProducts];
      }
      if (state.categoryFilter !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === state.categoryFilter
        );
      }
      if (state.brandFilter !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.brand === state.brandFilter
        );
      }
      if (state.priceRange > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= state.priceRange
        );
      }
      state.filteredProducts = filteredProducts;
    },
    //
  },
});

export const {
  setProducts,
  setProductsByCategory,
  setCategoryFilter,
  setBrandFilter,
  setPriceRange,
  filterProducts,
  setSearchTerm
} = productSlice.actions;
export default productSlice.reducer;
