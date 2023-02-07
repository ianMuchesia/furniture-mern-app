import API from "./API";
import { ProductModel } from "../@types/type";

export default {
  async getAllProducts() {
    const response = await API().get("products");
    return response.data.msg;
  },
  async getSingleProduct(productID:string){
    const response = await API().get('products')
    return response.data.msg.find((product:ProductModel)=>product._id === productID)
  }
};
