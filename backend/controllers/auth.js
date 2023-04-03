const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");

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
    const { firstName,lastName, CustomerEmail, CustomerPassword } = req.body; 

    if (!CustomerEmail) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'You must enter an email address.' });
      }
  
      if (!firstName || !lastName) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'You must enter your full name.' });
      }
  
      if (!CustomerPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'You must enter a password.' });
      }

      const existingCustomer = await User.findOne({ CustomerEmail });

      if (existingCustomer) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'That email address is already in use.' });
      }

      const customer = await User.create({ ...req.body });

      const token = customer.createJWT();
      res.status(StatusCodes.CREATED).json({ user: { name: customer.firstName }, token });
  
}


module.exports = {
    login, register
}