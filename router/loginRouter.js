//external imports
const express = require("express");

// internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  addLoginValidator,
  addLoginValidationHandler,
} = require("../middlewares/login/loginValidator");
const { redirectInboxIfLoggedIn } = require("../middlewares/common/checkLogin");

const router = express.Router();

// login page
router.get(
  "/",
  decorateHtmlResponse("Login"),
  redirectInboxIfLoggedIn,
  getLogin
);

// process login
router.post(
  "/",
  decorateHtmlResponse("Login"),
  addLoginValidator,
  addLoginValidationHandler,
  login
);

// logout
router.delete("/", logout);

module.exports = router;
