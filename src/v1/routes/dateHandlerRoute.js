const express = require("express");
const {
  getCurrentTime,
  getTime,
} = require("../../controllers/dateHandlerController");

const { Router } = express;

//Omar: Adding routing
const router = Router();

router.get("/", getCurrentTime);
router.get("/:date", getTime);

module.exports = { router };
