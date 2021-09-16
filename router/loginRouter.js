//external imports
const express = require("express");

// internal imports
const { getLogin, login } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  addLoginValidator,
  addLoginValidationHandler,
} = require("../middlewares/login/loginValidator");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// process login
router.post(
  "/",
  decorateHtmlResponse("Login"),
  addLoginValidator,
  addLoginValidationHandler,
  login
);

module.exports = router;
