// expernal imports
const express = require("express");

// internal imports
const { getUsers, addUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUserValidator,
  addUserValidationHandler,
  addUser
);

module.exports = router;
