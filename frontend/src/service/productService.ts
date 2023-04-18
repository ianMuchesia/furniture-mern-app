
import { ProductModel } from "../@types/type";


const baseURL='http://localhost:3000/api/v1/'
const getFeaturedProducts =()=>{
  return baseURL + "products?featured=true"
}
const featuredProductsURL = getFeaturedProducts();
export default {
  /* async getSingleProduct(productID: string) {
    try {
      const response = await API().get(`products/${productID}`);
      return response.data.msg;
    } catch (error) {
      console.log(error);
    }
  }, */
   featuredProductsURL
 /*  async getAllProducts() {
    try {
      const response = await API().get("products");
      return response.data.msg;
    } catch (error) {
      console.log(error);
    }
  }, */
/*   async getProductsByCategories(pagination: number) {
    console.log(arguments);
    try {
      let endpoint = `products?`;
      if (pagination) {
        endpoint += `page=${pagination}`;
      }

      console.log(endpoint);
      const response = await API().get(endpoint);
      return response.data.msg;
    } catch (error) {
      console.log(error);
    }
  }, */
};
