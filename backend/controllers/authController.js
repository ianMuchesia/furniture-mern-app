const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const login = async (req, res) => {
  const { CustomerEmail, CustomerPassword } = req.body;

  if (!CustomerEmail) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "You must enter an email address." });
  }

  if (!CustomerPassword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "You must enter a password." });
  }

  const customer = await User.findOne({ CustomerEmail });


  if (!customer) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: "No user found for this email address." });
  }

  const isPasswordCorrect = await customer.comparePassword(CustomerPassword);

  
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError(
      "Invalid Creedentials , please check your email or password"
    );
  }

  const token = customer.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: customer.firstName}, token });
};



const register = async(req, res)=>{
    const { firstName,lastName, email, password } = req.body; 

    if (!email) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'You must enter an email address.' });
      }
  
      if (!firstName || !lastName) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'You must enter your full name.' });
      }
  
      if (!password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'You must enter a password.' });
      }

      const existingEmail = await User.findOne({ email });

      if (existingEmail) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'That email address is already in use.' });
      }

      const isFirstAccount = (await User.countDocuments({})) === 0;
      const role = isFirstAccount ? "admin" : "user";
  
      const user = await User.create({ firstName , lastName , email , password , role });

      const tokenUser = createTokenUser(user);
      
      
      res.status(StatusCodes.CREATED).json({ user: { name: customer.firstName }, token });
  
}


module.exports = {
    login, register
}