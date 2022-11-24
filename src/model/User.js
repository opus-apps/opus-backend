"use strict";
const sql = require("../config/db");

class User {
  constructor(nama, password, alamat, no_telp, jenis_kelamin) {
    this.name = nama;
    this.password = password;
    this.alamat = alamat;
    this.no_telp = no_telp;
    this.jenis_kelamin = jenis_kelamin;
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
