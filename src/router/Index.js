"use strict";
const express = require("express");
const { Controller } = require("../controller/Controller");
const { userRoutes } = require("./userRouter");
const router = express.Router();

router.get("/", Controller.HomePage);
router.use("/users", userRoutes);

module.exports = { router };
