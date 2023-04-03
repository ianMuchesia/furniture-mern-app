const express = require("express");
const authenticateCustomer = require("../middleware/authentication");
const router = express.Router();

const {
  getAllProductsByCategory,
  getSingleProduct,
} = require("../controllers/customerProduct");
const {
  addCart,
  addItemToCart,
  removeCart,
  removeItemFromCart,
} = require("../controllers/cart");
//products
router.get("/", getAllProductsByCategory);
router.get("/:id", getSingleProduct);

//cart
router.post("/cart", authenticateCustomer, addCart);
router.patch('/cart/:cartId', authenticateCustomer, addItemToCart)
router.delete('/cart/:cartId', authenticateCustomer, removeCart)
router.patch('/cart/:cartId/:productId', authenticateCustomer,removeItemFromCart)

module.exports = router;
