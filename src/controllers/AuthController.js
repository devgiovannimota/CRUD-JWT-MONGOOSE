const { response } = require("express");
const UserModel = require("../Models/User");

const registerUser = async (request, response) => {
  const { email } = request.body;

  if (await UserModel.findOne({ email })) {
    return response.status(400).send({
      error: true,
      message: "User already exists",
    });
  }
  const User = await UserModel.create(request.body);
  User.password = "";

  return response.json({
    error: false,
    message: "Registred with sucess!",
    user: User,
  });
};

const authenticate = async (request, response) => {
  const { email, password } = request.body;

  const user = await UserModel.findOne({ email });

  console.log(user);
};

module.exports = {
  registerUser,
};
