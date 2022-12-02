const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const asyncWrapper = require("../../middleware/async");
const { createCustomError } = require("../../error/custom-error");

class AuthController {
  //route GET auth/checkAuth
  checkAuth = asyncWrapper(async (req, res, next) => {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return next(createCustomError("user not found", 400));
    res.json({ success: true, user });
  });

  //route POST auth/register
  register = asyncWrapper(async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(createCustomError("user not found ", 400));
    }

    //check for existing user
    const user = await User.findOne({ email });
    if (user) return next(createCustomError("Tài khoản đã tồn tại", 400));

    const hashPassword = await argon2.hash(password);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();

    //return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!accessToken) return next(createCustomError("Máy chủ lỗi!", 500));

    res.json({
      success: true,
      message: "Tạo tài khoản thành công",
      accessToken,
    });
  });

  //router auth/login
  login = asyncWrapper(async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Thiếu mật khẩu hoặc tài khoản!" });
    }
    //check for existing user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu sai!",
      });
    }
    //username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu sai!",
      });
    }
    //all good
    //return token
    const accessToken = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!accessToken) return next(createCustomError("Máy chủ lỗi!", 500));

    res.json({
      success: true,
      message: "user login successfully",
      accessToken,
    });
  });
}

module.exports = new AuthController();
