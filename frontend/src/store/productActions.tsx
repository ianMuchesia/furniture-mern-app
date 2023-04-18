/* import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import { RootState } from "./index";
import { ProductModel } from "../@types/type";
import ProductService from '../service'


export const productActions = productSlice.actions


//getState() is a function that is provided by Redux Toolkit's createSlice method which allows you to access the current state of the store. 
export const fetchProducts=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        if(getState().products.allProducts.length === 0){
            const response: ProductModel[] = await ProductService.getAllProducts();
            dispatch(productActions.setProducts(response))
        }
    }
}

export const fetchSingleProduct =(productID: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        const response: ProductModel = await ProductService.getSingleProduct(productID)
        dispatch(productActions.setSingleProduct(response))
    }
}

export const fetchFeaturedProducts =():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        if(getState().products.allProducts.length === 0){
        const response: ProductModel[] = await ProductService.getFeaturedProducts();
        dispatch(productActions.setFeaturedProduct(response))
        }
    }
}
export const fetchCategoryProducts =(pagination:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        if(getState().products.allProducts.length === 0){
        const response: ProductModel[] = await ProductService.getProductsByCategories(pagination);
        dispatch(productActions.setCategoryProduct(response))
        }
    }
}
 */