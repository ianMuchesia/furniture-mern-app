import API from "./API";
import { ProductModel } from "../@types/type";

export default {

  async getSingleProduct(productID:string){
    const response = await API().get(`products/${productID}`)
    return response.data.msg;
  },
  async getFeaturedProducts(){
    try {
      const response = await API().get("products?featured=true")
      return response.data.msg;
    } catch (error) {
      //handle error
      console.log(error);
    }
  },
  async getAllProducts(category?:string, pagination?:string){
    try {
      let endpoint = `products?`
      if(pagination){
        endpoint += `&page=${pagination}`
      }
      if(category){
        endpoint += `$category=${category}`
      }
      const response = await API().get(endpoint)
      return response.data.msg
    } catch (error) {
      console.log(error)
    }
  }
};
