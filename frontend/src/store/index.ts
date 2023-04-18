import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import cartSlice from "./cartSlice"

const store = configureStore(
    {
        reducer:{
            products:productSlice,
            cart:cartSlice,
        },
        
    }
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;