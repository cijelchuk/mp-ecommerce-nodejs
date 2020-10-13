const express = require("express");
const router = express.Router();

const {
  homeController,
  getDetailController,
  postDetailController,
  getNotificationController,
  postNotificationController,
  payController,
  failureController,
  successController,
  pendingController,
} = require("../controllers");
const { asyncErrorHandler } = require("../middleware");

router.get("/", homeController);
router.get("/detail", getDetailController);
router.post("/detail", postDetailController);
router.post("/pay", asyncErrorHandler(payController));
router.get("/notification", asyncErrorHandler(getNotificationController));
router.post("/notification", asyncErrorHandler(postNotificationController));
router.get("/failure", asyncErrorHandler(failureController));
router.get("/success", asyncErrorHandler(successController));
router.get("/pending", asyncErrorHandler(pendingController));

module.exports = router;
