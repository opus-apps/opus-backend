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
  static getUsersById(req, res) {
    let id = req.params.id;
    User.showUserById(id, (err, data) => {
      if (err) {
        res.json({
          statusCode: 404,
          message: "error",
          err,
        });
      } else {
        res.status(200).json({
          message: "success",
          data,
        });
      }
    });
  }

  static async newUser(req, res, next) {
    let payload = await req.body;
    User.createUser(payload, (err, data) => {
      if (err) {
        res.json("Error", err);
      } else {
        res.status(200).json({ message: "success", data });
      }
      next();
    });
  }
}

module.exports = { UserController };
