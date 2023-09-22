const express = require("express");
const { testController } = require("../../controllers/v1/testController");

const router = express.Router();

router.route("/test").get(testController);

module.exports = router;
