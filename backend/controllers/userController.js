const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");


const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({ role: "user" }).select("-password");
      res.status(StatusCodes.OK).json({ success: true, users });
    } catch (error) {
      console.log(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: `something wrong happened try again later` });
    }
  };
  





  module.exports = {
    getAllUsers
  }