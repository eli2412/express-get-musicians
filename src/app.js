const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection");
const musicianRouter = require("./routes/musician");

const port = 3000;
app.use(express.json());
app.use("/musicians", musicianRouter);
// app.use(express.urlencoded());
//TODO: Create a GET /musicians route to return all musicians 







module.exports = app;