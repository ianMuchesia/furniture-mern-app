export interface ProductModel{
    _id: number;
    name: string;
    description: string;
    price: number;
    featured: boolean;
    imageUrl:string;
    
} 
export interface ProductArrayModel{
    allProducts : ProductModel[];
    singleProduct:ProductModel;
   
}