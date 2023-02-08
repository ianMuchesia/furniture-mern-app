export interface ProductModel{
    _id: string;
    name: string;
    description: string;
    price: number;
    featured: boolean;
    imageUrl:string;
    brand:string;
    rating:number;
    category:string;
    
} 
export interface ProductArrayModel{
    allProducts : ProductModel[];
    singleProduct:ProductModel;
   
}
export interface cartProductModel{
    _id: string;
    name: string;
    
    price: number;
    
    imageUrl:string;
    
    rating:number;
    quantity:number;
    totalPrice:number;
    
}
export interface cartModel{
    itemsList:cartProductModel[];
    totalQuantity:number;
    subTotal:number;
    showCart:boolean;
}