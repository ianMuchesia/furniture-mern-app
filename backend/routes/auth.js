const express = require('express')
const {login, register, logoutUser, forgotPassword} = require('../controllers/authController')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/logout', logoutUser)
router.post('/forgotPassword', forgotPassword)


module.exports = router