const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
bodyParser = require("body-parser").json();

// user 조회
router.get("/findAll", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);
  }
});

// user 회원가입
router.post("/signup", bodyParser, async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).json({
      success: true,
      message: req.body.name + "이 추가되었습니다",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
