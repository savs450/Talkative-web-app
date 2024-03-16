const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the Feilds");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
    });
  } else {
    res.send(400);
    throw new Error("Failed to create New User");
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({email})
  let isPasswordMatched = await user.matchedPassword(password)
  if(user && isPasswordMatched){
    res.json({
        _id : user._id,
        name: user.name,
        email : user.email,
        pic: user.pic,
        token:generateToken(user._id)
    })
  }
});
module.exports = { registerUser,authUser};
