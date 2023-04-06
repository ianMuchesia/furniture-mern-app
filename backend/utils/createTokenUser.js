const createTokenUser = (user) => {
    return { name: user.firstname +""+user.lastname, userId: user._id, role: user.role };
  };
  
  module.exports = createTokenUser;