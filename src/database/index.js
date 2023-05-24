const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9hnutps.mongodb.net/?retryWrites=true&w=majority`
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
