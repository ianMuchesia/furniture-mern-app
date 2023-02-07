import { createSlice } from "@reduxjs/toolkit";
import { cartModel, cartProductModel } from "../@types/type";
const initialCartState: cartModel={
    itemsList:[],
    totalQuantity:0,
    showCart:false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers:{
        addToCart(state,action){
            const newItem: cartProductModel= action.payload

            const itemExists = state.itemsList.find(item=>item._id === newItem._id)
            if(itemExists){
                itemExists.quantity++;
                itemExists.totalPrice += newItem.price
            }else{
                state.itemsList.push({
                    _id:newItem._id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name,
                    imageUrl:newItem.imageUrl,
                    rating:newItem.rating
                   


                })
            }

        }
    }
})