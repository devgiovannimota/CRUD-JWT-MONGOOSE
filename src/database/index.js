const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://giovaniname:123123123@cluster0.9hnutps.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
