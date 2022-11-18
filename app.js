/* Depedencies */
"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const { router } = require("./src/router/Index");

const originCors = {
  host: `http://localhost:${PORT}`,
};

const app = express();
app.use("/", router);
app.use(cors(originCors));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => console.log("listening on port", PORT));
