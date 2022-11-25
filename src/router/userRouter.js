"use strict";

const express = require("express");
const userRoutes = express.Router();
const { UserController } = require("../controller/UserController");

userRoutes.get("/", UserController.getAllUsers);
userRoutes.get("/:id", UserController.getUsersById);
userRoutes.post("/add", UserController.getAllUsers);

module.exports = { userRoutes };
