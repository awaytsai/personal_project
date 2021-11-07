const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../util/util");
const { authMiddleware } = require("../util/auth");
const Noti = require("../controller/notification_controller");
const Match = require("../controller/match_controller");

// get notification  by user
router
  .route("/notification")
  .get(authMiddleware, wrapAsync(Noti.getNotification));

// get match post
router
  .route("/match/detail")
  .get(authMiddleware, wrapAsync(Match.getMatchPostDetail));

// store match list
router
  .route("/storeMatchList")
  .post(authMiddleware, wrapAsync(Match.storeMatchList));

// show confirm post
router
  .route("/getConfirmPost")
  .get(authMiddleware, wrapAsync(Match.getConfirmPost));

// update confirm post
router
  .route("/updateConfirmPost")
  .put(authMiddleware, wrapAsync(Match.updateConfirmPost));

module.exports = router;
