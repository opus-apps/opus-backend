"use strict";
const express = require("express");
const { Controller } = require("../controller/Controller");
const router = express.Router();

router.get("/", Controller.HomePage);

module.exports = { router };
