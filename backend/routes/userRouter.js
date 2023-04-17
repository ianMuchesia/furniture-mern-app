const express = require("express");
const router = express.Router();

const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const { getAllUsers, getSingleUser, showCurrentUser, updateUser } = require("../controllers/userController");

router.get("/", authenticateUser, authorizePermissions("admin"), getAllUsers);
router.get("/showMe", authenticateUser, showCurrentUser);
router.get("/:id",  authenticateUser, authorizePermissions("admin"),getSingleUser)
router.patch("/",  authenticateUser,updateUser)
module.exports = router;
