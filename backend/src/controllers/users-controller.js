const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (error) {
    const err = new HttpError(
      "Fetching users failed, please try again later",
      500
    );
    return next(err);
  }

  res.send({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new HttpError(
      "Invalid inputs passed, please check your data",
      422
    );
    return next(err);
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    const err = new HttpError("Signing up failed, please try again later", 500);
    return next(err);
  }

  if (existingUser) {
    const err = new HttpError("User already exists, please login instead", 422);
    return next(err);
  }

  const createdUser = new User({
    name,
    email,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    password,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (error) {
    const err = new HttpError("Signing up failed, please try again", 500);
    return next(err);
  }

  res.send({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    const err = new HttpError("Logging in failed, please try again later", 500);
    return next(err);
  }

  if (!existingUser || existingUser.password !== password) {
    const err = new HttpError("Invalid credentials, could not log in", 401);
    return next(err);
  }

  res.send({ message: "Logged In!" });
};

module.exports = { getUsers, signup, login };
