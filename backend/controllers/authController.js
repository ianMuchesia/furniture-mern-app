const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const {createTokenUser  , attachCookiesToResponse} = require('../utils')
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

  if (!email) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "You must enter an email address." });
  }

  if (!password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "You must enter a password." });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: "No account available for this email address." });
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    return res.status(StatusCodes.UNAUTHORIZED).json({msg:"Invalid details please check your email or password"})
  }

  const tokenUser = createTokenUser(user);
  
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ success: true, user: tokenUser });
  } catch (error) {
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something wrong happened, try again later"})
  }
};

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!email) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "You must enter an email address." });
    }
  
    if (!firstName || !lastName) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "You must enter your full name." });
    }
  
    if (!password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "You must enter a password." });
    }
  
    const existingEmail = await User.findOne({ email });
  
    if (existingEmail) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "That email address is already in use." });
    }
  
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin" : "user";
  
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });
  
    const tokenUser = createTokenUser(user);
  
    attachCookiesToResponse({ res, user: tokenUser });
  
    res.status(StatusCodes.CREATED).json({ success: true, user: tokenUser });
  } catch (error) {
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something wrong happened, try again later"})
  }
};

const logoutUser =  async(req , res) =>{
  try {
    res.send(":logout user")
  } catch (error) {
    
  }
}

module.exports = {
  login,
  register,
  logoutUser
};
