const express = require("express");
const { createUser, getAllUserByAdmin, getUserDetailsByEmail } = require("../../../controllers/v1/userController/userController");

const router = express.Router();


router.route("/user").post(createUser);
router.route("/user").get(getUserDetailsByEmail);

router.route("/users").get(getAllUserByAdmin);

module.exports = router;
