// External Module
const express = require("express");
const userRouter = express.Router();

// local Module
const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getIndex);
userRouter.get("/bookings", homesController.getBooking);
userRouter.get("/homes", homesController.goHome);
userRouter.get("/favourites", homesController.getFavouriteList);
userRouter.get("/home/:homeID", homesController.getHomesDetails);

module.exports = userRouter;
