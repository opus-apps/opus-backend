"use strict";

const { User } = require("../model/User");

class Controller {
  static async HomePage(req, res) {
    User.ShowAllUserById((err, data) => {
      if (err) {
        console.log("Data not found", err);
      } else {
        res.status(200).json({
          message: "Success",
          data,
        });
      }
    });
  }
}

module.exports = { Controller };
