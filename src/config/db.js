"use strict";

require("dotenv").config();

const mysql = require("mysql");
const DBConfig = require("./db.config");

const connectDB = mysql.createConnection({
  host: DBConfig.HOST,
  port: DBConfig.PORT,
  user: DBConfig.USER,
  database: DBConfig.DB,
});

module.exports = connectDB;
