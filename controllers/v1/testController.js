const catchAsyncErrorsMiddleware = require("../../middleware/catchAsyncErrorsMiddleware");

// test Route are ok to work or not
exports.testController = catchAsyncErrorsMiddleware(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "test route is working",
  });
});
