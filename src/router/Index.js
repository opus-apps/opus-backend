"use strict";
const express = require("express");
// const { Controller } = require("../controller/Controller");
const userRoutes = require("./userRouter");
const router = express.Router();
const { UserController } = require("../controller/UserController");
// router.use("/", Controller.HomePage);
router.use("/users", userRoutes);
router.post("/register", UserController.newUser);

module.exports = router;
