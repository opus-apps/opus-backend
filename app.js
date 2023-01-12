"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const app = express();
const router = require("./src/router/Index");

app.use(router);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("listening on port", port));
