const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../util/util");
const User = require("../controller/user_controller");
const { authMiddleware } = require("../util/auth");

// sign up
router.route("/member/signup").post(wrapAsync(User.signUp));

// native sign in
router.route("/member/signin").post(wrapAsync(User.signIn));

// render user data
router.route("/getUserData").get(authMiddleware, wrapAsync(User.getUserData));

// fb sign in
// router.route("/member/fbsignin").post(wrapAsync(User.fbsignIn));

module.exports = router;
