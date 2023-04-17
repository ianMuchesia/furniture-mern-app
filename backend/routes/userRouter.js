const express = require("express");
const router = express.Router();

const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const { getAllUsers, getSingleUser } = require("../controllers/userController");

router.get("/", authenticateUser, authorizePermissions("admin"), getAllUsers);
router.get("/:id",  authenticateUser, authorizePermissions("admin"),getSingleUser)
module.exports = router;
