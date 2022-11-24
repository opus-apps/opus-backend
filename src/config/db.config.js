"use strict";
require('dotenv').config();
module.exports = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    USERNAME: process.env.USENAME,
    DB: process.env.DB,
}