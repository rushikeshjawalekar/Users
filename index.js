const express = require("express");
const colors = require("colors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("./connection");

const personRoute = require("./routes/personRoute");
app.use("/person", personRoute);

app.listen(8080, () => {
  console.log("loading".rainbow);
  const delay = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    console.log("Welcome to the server".rainbow);
  }, delay);
});

module.exports = colors;
