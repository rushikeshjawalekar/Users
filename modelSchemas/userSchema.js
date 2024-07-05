const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Person = mongoose.model("Person", userSchema);
module.exports = Person;
