const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {
  checkPermissions,
  createTokenUser,
  attachCookiesToResponse,
} = require("../utils");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.status(StatusCodes.OK).json({ success: true, users });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};

const getSingleUser = async (req, res) => {
  const { id: userID } = req.params;
  try {
    const user = await User.findOne({ _id: userID, role: "user" }).select(
      "-password"
    );

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `user with id:${userID} not found` });
    }

    checkPermissions(req.user, user._id);

    res.status(StatusCodes.OK).json({ success: true, user });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};

const showCurrentUser = async (req, res) => {
  try {
    res.status(StatusCodes.OK).json({ success: true, user: req.user });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};


module.exports = {
  getAllUsers,
  getSingleUser,
};
