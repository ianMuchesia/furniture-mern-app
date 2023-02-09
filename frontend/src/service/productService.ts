import API from "./API";
import { ProductModel } from "../@types/type";

export default {
  async getSingleProduct(productID: string) {
    try{
      const response = await API().get(`products/${productID}`);
      return response.data.msg;

    }catch(error){console.log(error)}
  
  },
  async getFeaturedProducts() {
    try {
      const response = await API().get("products?featured=true");
      return response.data.msg;
    } catch (error) {
      //handle error
      console.log(error);
    }
  },
  async getAllProducts() {
    try {
     
      const response = await API().get('products');
      return response.data.msg;
    } catch (error) {
      console.log(error);
    }
  },
  async getProductsByCategories(pagination: number, category:string) {
    console.log(arguments)
    try {
      let endpoint = `products?`;
      if (pagination) {
        endpoint += `&page=${pagination}`;
      }
      if (category) {
        endpoint += `$category=${category}`;
      }
      console.log(endpoint)
      const response = await API().get(endpoint);
      return response.data.msg;
    } catch (error) {
      console.log(error);
    }
  },
};
