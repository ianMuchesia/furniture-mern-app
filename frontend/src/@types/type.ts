export interface ProductModel{
    _id: string;
    name: string;
    description: string;
    price: number;
    featured: boolean;
    imageUrl:string;
    brand:string;
    rating:number;
    
} 
export interface ProductArrayModel{
    allProducts : ProductModel[];
    singleProduct:ProductModel;
   
}
export interface cartProductModel{
    _id: string;
    name: string;
    description: string;
    price: number;
    featured: boolean;
    imageUrl:string;
    brand:string;
    rating:number;
    quantity:number;
    totalPrice:number;
}
export interface cartModel{
    itemsList:cartProductModel[];
    totalQuantity:number;
    showCart:boolean;
}