const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const crypto = require("crypto");

const { createTokenUser, attachCookiesToResponse } = require("../utils");
const sendEmail = require("../utils/sendEmail");
const Token = require("../models/TokenModel");

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
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Invalid details please check your email or password" });
    }

    const tokenUser = createTokenUser(user);

    attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.CREATED).json({ success: true, user: tokenUser });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something wrong happened, try again later" });
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
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something wrong happened, try again later" });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "logout", {
      httpOnly: true,
      expires: new Date(Date.now() + 1000), //expiresin one second
    });
    res.status(StatusCodes.OK).json({ success: true, msg: "user logged out!" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something wrong happened, try again later" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        msg: `user with email:${email} does not exist`,
      });
    }

    //create reset token
    let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
    //user._id to make it unique

    //hash token before saving to database
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    //save token to database
    await new Token({
      userId: user._id,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 30 * (60 * 1000),
    }).save();

    //construct reset url
    const resetUrl = `${process.env.CLIENT_SIDE_URL}/resetpassword/${resetToken}
    `;

    //Reset Email
    const message = `<h2> ${user.name}</h2>
      <p>Please use the url below to reset you password</p>
      <p>This reset Link expires after 30 minutes</p>

      <a  href=${resetUrl} clicktracking=off>${resetUrl}</a>


      <p>Regard...</p>
      <p>Home Furnish</p>
      `;

      //subject
      const subject = "Password Reset Request "
      const send_to = user.email
      const sent_from = process.env.EMAIL_USER

      await sendEmail(subject, message , send_to, sent_from )

      res.status(StatusCodes.OK).json({success:true , msg: "Reset Email Sent"})

  
  } catch (error) {
    console.log(error);
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "something wrong happened, try again later" });
  }
};

module.exports = {
  login,
  register,
  logoutUser,
  forgotPassword,
};
