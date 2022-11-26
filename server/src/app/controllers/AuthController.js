const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
class AuthController {
  async checkAuth(req, res) {
    try {
      const user = await User.findById(req.userId).select("-password");
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "user not found" });
      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Máy chủ lỗi!" });
    }
  }

  //route POST auth/register
  async register(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
    }
    try {
      //check for existing user
      const user = await User.findOne({ username });
      if (user)
        return res.status(400).json({
          success: false,
          message: "Tài khoản đã tồn tại.",
        });

      const hashPassword = await argon2.hash(password);
      const newUser = new User({ username, password: hashPassword });

      await newUser.save();

      //return token
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({
        success: true,
        message: "Tạo tài khoản thành công",
        accessToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Máy chủ lỗi!" });
    }
  }

  //router auth/login
  async login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Thiếu mật khẩu hoặc tài khoản!" });
    }
    try {
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
      res.json({
        success: true,
        message: "user login successfully",
        accessToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Máy chủ lỗi!" });
    }
  }
}

module.exports = new AuthController();
