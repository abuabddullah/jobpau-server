const catchAsyncErrorsMiddleware = require("../../middleware/catchAsyncErrorsMiddleware");
const TestModel = require("../../models/v1/testModel");

// POST request for test Route
exports.testControllerPost = catchAsyncErrorsMiddleware(
  async (req, res, next) => {
    const { message } = req.body;
    const testPost = await TestModel.create({
      message,
    });

    res.status(201).json({
      success: true,
      testPost,
    });
  }
);

// test Route are ok to work or not
exports.testControllerGet = catchAsyncErrorsMiddleware(
  async (req, res, next) => {
    const posts = await TestModel.find();
    res.status(200).json({
      success: true,
      posts,
    });
  }
);
