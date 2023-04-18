import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel, ProductArrayModel } from "../@types/type";

const initialProductState = {
  allProducts : [] as ProductModel [],
  length : 0,
  singleProduct: {} as ProductModel,
  categoryProducts:  [] as ProductModel [],
}
  


const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductModel[]>) {
       state.allProducts = action.payload
       state.length = state.allProducts.length
    },
   setProductsByCategory(state, action:PayloadAction<string>){
      const category = action.payload
      state.categoryProducts = state.allProducts.filter(product=>product.category === category)
      state.categoryProducts = state.categoryProducts.filter(product=>product._id !== category)
      state.length = state.allProducts.length
   },

    //
   
  },
});

export const {setProducts , setProductsByCategory} = productSlice.actions
export default productSlice.reducer
