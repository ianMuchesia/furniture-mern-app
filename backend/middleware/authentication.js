const { isTokenValid } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token; //the token characters

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, msg: "Authentication Invalid" });
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, msg: "Authentication Invalid" });
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ success: false, msg: "Not authorized to access this route" });
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
