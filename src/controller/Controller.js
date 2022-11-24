"use strict";

const { User } = require("../model/User");

class Controller {
  static async HomePage(req, res) {
    res.result("Hllo");
  }

  // // static async getAllUsers(req, res) {
  // //   User.showAllUser((err, data) => {
  // //     if (err) {
  // //       console.log("Not Connected", err);
  // //     } else {
  // //       res.status(200).json({
  // //         title: "Users",
  // //         message: "Hasil Semua Data user",
  // //         data,
  // //       });
  // //     }
  // //   });
  // }
}

module.exports = { Controller };
