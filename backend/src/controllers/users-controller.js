const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    const err = new HttpError("Signing up failed, please try again later", 500);
    return next(err);
  }

  const createdUser = new User({
    name,
    email,
    image: req.file.path,
    password: hashedPassword,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (error) {
    const err = new HttpError("Signing up failed, please try again", 500);
    return next(err);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (error) {
    const err = new HttpError("Signing up failed, please try again", 500);
    return next(err);
  }

  res.send({ userId: createdUser.id, email: createdUser.email, token: token });
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

  if (!existingUser) {
    const err = new HttpError("Invalid credentials, could not log in", 401);
    return next(err);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    const err = new HttpError("Invalid credentials, could not log in", 401);
    return next(err);
  }

  if (!isValidPassword) {
    const err = new HttpError("Invalid credentials, could not log in", 401);
    return next(err);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (error) {
    const err = new HttpError("Logging in failed, please try again", 500);
    return next(err);
  }

  res.send({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

module.exports = { getUsers, signup, login };
