"use strict";

const { User } = require("../model/User");

class Controller {
  static async HomePage(req, res) {
    res.send("Hllo");
  }
}

module.exports = { Controller };
