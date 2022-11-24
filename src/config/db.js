"use strict";

require("dotenv").config;

const mysql = require("mysql");
const DBConfig = require("./db.config");

const connectDB = mysql.createConnection({
  host: DBConfig.HOST,
  port: DBConfig.PORT,
  password: DBConfig.PASSWORD,
  username: DBConfig.USERNAME,
  database: DBConfig.DB,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log("Database connected ...");
});

module.exports = connectDB;
