import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel, ProductArrayModel } from "../@types/type";

const initialProductState = {
  products : [] as ProductModel [],
  length : 0,
}
  


const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductModel[]>) {
       state.products = action.payload
       state.length = state.products.length
    },
   setProductsByCategory(state, action:PayloadAction<string>){
      const category = action.payload
      state.products = state.products.filter(product=>product.category === category)
      state.length = state.products.length
   }
    //
   
  },
});

export const {setProducts , setProductsByCategory} = productSlice.actions
export default productSlice.reducer
