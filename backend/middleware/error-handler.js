const { CustomApiError } = require("../errors");
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = async (err, req, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });

};

module.exports = errorHandlerMiddleware;

