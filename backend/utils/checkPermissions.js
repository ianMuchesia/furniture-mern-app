const {UnauthenticatedError} = require('../errors');
const {StatusCodes} = require('http-status-codes')

const chechPermissions = (requestUser, resourceUserId) => {
    if (requestUser.role === 'admin') return;
    if (requestUser.userId === resourceUserId.toString()) return;
    throw new UnauthenticatedError(
      'Not authorized to access this route'
    );
};

module.exports = chechPermissions;