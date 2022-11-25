"use strict";

const { User } = require("../model/User");

class UserController {
  static async getAllUsers(req, res) {
    User.showAllUser((err, data) => {
      if (err) {
        console.log("Not Connected", err);
      } else {
        res.status(200).json({
          title: "Users",
          message: "Hasil Semua Data user",
          data,
        });
      }
    });
  }
  static async getUsersById(req, res) {
    User.showAllUserById((err, data) => {
      if (err) {
        console.log("Not Connected", err);
      } else {
        res.status(200).json({
          title: "Users",
          message: "Hasil Semua Data user by id",
          data,
        });
      }
    });
  }
  static async newUser(req, res) {
    let payload = req.body;
    User.createUser(payload, (err, data) => {
      if (err) {
        console.log("Not Connected", err);
      } else {
        res.status(200).json({
          title: "Users",
          message: "Berhasil menambahkan data User...",
          data,
        });
      }
    });
  }
}

module.exports = { UserController };
