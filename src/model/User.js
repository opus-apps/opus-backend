"use strict";
const sql = require("../config/db");

class User {
  constructor(id, usename, password) {
    this.id = id;
    this.usename = usename;
    this.password = password;

    // this.alamat = alamat;
    // this.no_telp = no_telp;
    // this.jenis_kelamin = jenis_kelamin;
  }

  static async showAllUser(result) {
    let sqlQuery = `SELECT * FROM user`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(null, err);
      } else {
        let rawData = JSON.parse(JSON.stringify(res));
        let users = [];
        let user;

        rawData.forEach((eachData) => {
          user = new User(eachData.id, eachData.usename, eachData.password);
          users.push(user);
        });
        console.log("Data all users =>", rawData);
        result(null, users);
      }
    });
  }
  static showUserById(id, data, result) {
    let sqlQuery = `SELECT * FROM user WHERE id=${id}`;
    sql.query(sqlQuery, data, (err, res) => {
      if (err) throw err;
      let rawData = JSON.parse(JSON.stringify(res));
      let users = [];
      let user;

      rawData.forEach((eachData) => {
        user = new User(eachData.id, eachData.usename, eachData.password);
        users.push(user);
      });
      console.log("Data all users =>", rawData);
      result(null, users);
    });
  }

  static createUser(data, result) {
    let sqlQuery = `INSERT INTO user SET ?`;
    try {
      sql.query(sqlQuery, data, (err, res) => {
        if (err) {
          console.log("data gagal ditambahkan", err);
          result(res, null);
        } else {
          result(true, res);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { User };
