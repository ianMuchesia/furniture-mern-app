export interface Product{
    _id: number;
    name: string;
    description: string;
    price: number;
    featured: boolean;
    imageUrl:string;
    
} 
export interface ProductArrayModel{
    allProducts : Product[],
   
}