const mongoose = require("mongoose");
const colors = require("colors");

mongoose
  .connect("mongodb://localhost:27017/MyUser")
  .then(() => {
    console.log("Connected Successfully to MongoDB".blue);
  })
  .catch((err) => {
    console.log("Connection Failed Due to below Reason");
    console.log(err);
  });

module.exports = mongoose;
