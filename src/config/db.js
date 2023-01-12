"use strict";

require("dotenv").config();

const mysql = require("mysql");
const DBConfig = require("./db.config");

const connectDB = mysql.createConnection({
  host: DBConfig.HOST,
  user: "root",
  password: "",
  database: DBConfig.DB,
});
connectDB.connect((err) => {
  if (err) throw err;
  console.log("Connecting to database...");
});

module.exports = connectDB;
