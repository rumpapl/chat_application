// external import
const express = require("express");

// enternal imports
const { getInbox } = require("../controller/inboxController");

const router = express.Router();

// inbox page
router.get("/", getInbox);

module.exports = router;
