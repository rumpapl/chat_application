// expernal imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");

const router = express.Router();

// users page
router.get("/", getUsers);

module.exports = router;
