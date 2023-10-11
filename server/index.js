require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { MONGO_URI, PORT } = process.env;

const User = require("./models/user");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("mongodb connected...");
    // User.findAll().then((users) => {
    //   console.log(users);
    // });
    User.findAll()
      .then((users) => console.log(users))
      .catch((e) => console.error(e));
  })
  .catch((e) => console.log(e));

const server = app.listen(PORT, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
