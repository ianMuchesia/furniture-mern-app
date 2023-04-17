const express = require("express");
const router = express.Router();

const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updatePassword,
} = require("../controllers/userController");

router.get("/", authenticateUser, authorizePermissions("admin"), getAllUsers);
router.get("/showMe", authenticateUser, showCurrentUser);
router.patch("/", authenticateUser, updateUser);
router.post("/changePassword",authenticateUser, updatePassword);
router.get(
  "/:id",
  authenticateUser,
  authorizePermissions("admin"),
  getSingleUser
);

module.exports = router;
