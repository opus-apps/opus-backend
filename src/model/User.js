"use strict";
const sql = require("../config/db");

class User {
  constructor(id, nama, password, tanggal_lahir, email) {
    this.id = id;
    this.nama = nama;
    this.password = password;
    this.tanggal_lahir = tanggal_lahir;
    this.email = email;
  }

  static async showAllUser(result) {
    let sqlQuery = `SELECT * FROM users`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(null, err);
      } else {
        let rawData = JSON.parse(JSON.stringify(res));
        let users = [];
        let user;

        rawData.forEach((eachData) => {
          user = new User(eachData.nama, eachData.password, eachData.tanggal_lahir, eachData.email);
          users.push(user);
        });
        console.log("Data all users =>", rawData);
        result(null, users);
      }
    });
  }
  static async createUser(data, result) {
    let sqlQuery = `INSERT INTO users SET ?`;
    sql.query(sqlQuery, data, (err, res) => {
      if (err) {
        console.log(null, "Data gagal ditambahkan... ", err);
      } else {
        let rawData = JSON.parse(JSON.stringify(res));
        let users = [];
        let user;

        rawData.forEach((eachData) => {
          user = new User(eachData.nama, eachData.password, eachData.alamat, eachData.no_telp, eachData.jenis_kelamin);
          users.push(user);
        });
        console.log("Data users baru ditambahkan =>", rawData);
        result(null, users);
      }
    });
  }
  static async ShowAllUserById(id, result) {
    let sqlQuery = `SELECT * FROM users WHERE id=${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(null, err);
      } else {
        let rawData = JSON.parse(JSON.stringify(res));
        let users = [];
        let user;

        rawData.forEach((eachData) => {
          user = new User(eachData.nama, eachData.password, eachData.alamat, eachData.no_telp, eachData.jenis_kelamin);
          users.push(user);
        });
        console.log("Data all users =>", rawData);
        result(null, users);
      }
    });
  }
}

module.exports = { User };
