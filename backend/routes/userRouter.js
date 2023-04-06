const express = require("express");
const router = express.Router();

const {
    authenticateUser,
    authorizePermissions,
  } = require("../middleware/authentication");
const { getAllUsers } = require("../controllers/userController");


  router.get("/", authenticateUser, authorizePermissions("admin"), getAllUsers);



  module.exports = router;