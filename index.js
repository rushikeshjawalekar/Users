const express = require("express");
const colors = require("colors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("./connection");

const passport = require("./auth");

app.use(passport.initialize());
const middleWareStrat = passport.authenticate("local", { session: false });

const personRoute = require("./routes/personRoute");
// app.use("/person", personRoute);
app.use("/person", middleWareStrat, personRoute);

app.listen(8080, () => {
  console.log("loading".rainbow);
  const delay = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    console.log("Welcome to the server".rainbow);
  }, delay);
});

module.exports = colors;
