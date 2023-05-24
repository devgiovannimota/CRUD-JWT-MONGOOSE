const UserModel = require("../Models/User");

const getAdmin = (request, response) => {
  return response.json({ message: "oie" });
};

module.exports = {
  getAdmin,
};
