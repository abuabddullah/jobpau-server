const express = require("express");
const { testControllerPost, testControllerGet } = require("../../controllers/v1/testController");

const router = express.Router();

router.route("/test").post(testControllerPost);
router.route("/test").get(testControllerGet);

module.exports = router;
