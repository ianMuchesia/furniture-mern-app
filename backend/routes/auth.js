const express = require('express')
const {login, register, logoutUser} = require('../controllers/authController')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/logout', logoutUser)


module.exports = router