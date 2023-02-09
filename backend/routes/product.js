const express = require('express')

const router = express.Router()

const {getAllProductsByCategory, getSingleProduct } = require('../controllers/customerProduct')


router.get('/', getAllProductsByCategory)
router.get('/:id', getSingleProduct)

module.exports = router