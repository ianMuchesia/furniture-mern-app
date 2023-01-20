export interface Product{
    _id: number;
    name: string;
    description: string;
    price: number;
    featured: boolean;
} 
export interface ProductArrayModel{
    allProducts : Product[],
    particular_Product: Product
}