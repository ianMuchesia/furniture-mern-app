const express = require("express");
const authenticateCustomer = require("../middleware/authentication");
const router = express.Router();

const {
  getAllProductsByCategory,
  getSingleProduct,
} = require("../controllers/productController");


//products
router.get("/", getAllProductsByCategory);
router.get("/:id", getSingleProduct);



module.exports = router;
