const catchAsyncErrorsMiddleware = require("../../../middleware/catchAsyncErrorsMiddleware");
const UserModel = require("../../../models/v1/userModel/userModel");

exports.createUser = catchAsyncErrorsMiddleware(async (req, res, next) => {
  const userInfo = req.body;
  console.log(userInfo);
  const user = await UserModel.create(userInfo);
  res.status(201).json({
    success: true,
    user,
  });
});

exports.getAllUserByAdmin = catchAsyncErrorsMiddleware(
  async (req, res, next) => {
    const users = await UserModel.find();
    res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  }
);

exports.getUserDetailsByEmail = catchAsyncErrorsMiddleware(
  async (req, res, next) => {
    const userEmail = req.query.email;
    const userDetails = await UserModel.findOne({ email: userEmail });
    if (!userDetails) {
      return next(new Error("User not found"));
    }
    res.status(200).json({
      success: true,
      userDetails,
    });
  }
);
