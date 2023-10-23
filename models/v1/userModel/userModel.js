const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  country: String,
  address: String,
  city: String,
  postcode: String,
  term: Boolean,
  companyName: String,
  employeeRange: String,
  companyCategory: String,
  role: {
    type: String,
    required: true,
    enum: ["employer", "candidate"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
