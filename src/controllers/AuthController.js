const UserModel = require("../Models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user = {}) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.SECRET,
    {
      expiresIn: 86000,
    }
  );
};

const registerUser = async (request, response) => {
  const { email } = request.body;

  if (await UserModel.findOne({ email })) {
    return response.status(400).send({
      error: true,
      message: "User already exists",
    });
  }
  const user = await UserModel.create(request.body);
  user.password = "";

  return response.json({ user, token: generateToken(user) });
};

const authenticate = async (request, response) => {
  const { email, password } = request.body;

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return response.status(400).json({
      error: true,
      message: "User not found",
    });
  }

  if (!(await bcryptjs.compare(password, user.password))) {
    return response.status(400).send({
      error: true,
      message: "Invalid password",
    });
  }
  user.password = "";

  return response.json({ user, token: generateToken(user) });
};

module.exports = {
  registerUser,
  authenticate,
};
