const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastnameF: {
    type: String,
    required: true,
  },
  lastnameM: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  charge: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ci: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
