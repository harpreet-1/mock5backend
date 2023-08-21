const express = require("express");
const userModel = require("../Models/UserModel");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
userRouter.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      return res
        .status(200)
        .json({ message: "user already exist please login" });
    }
    const hash = bcrypt.hash(password, 4);
    user = await userModel.create({ email, password: hash });

    return res
      .status(201)
      .json({ message: "user registered successfully", user });
  } catch (error) {
    console.log("error from signup**************", error);
    res.status(500).json({ error: "internal server error" });
  }
});
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const result = bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ email, userId: user._id }, "jsonsecretkey");
    return res.status(201).json({ message: "Login Successful", token, user });
  } catch (error) {
    console.log("error from login**************", error);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = userRouter;
