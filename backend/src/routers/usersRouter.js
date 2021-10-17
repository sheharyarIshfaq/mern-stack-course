const express = require("express");
const usersControllers = require("../controllers/users-controller");

const router = express.Router();

router.post("/");

router.post("/signup");

router.post("/login");

module.exports = router;
