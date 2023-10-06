/* create model for test route */
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TestModel = mongoose.model("Test", testSchema);

module.exports = TestModel;
