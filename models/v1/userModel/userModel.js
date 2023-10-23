const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
