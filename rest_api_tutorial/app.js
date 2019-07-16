const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const MONGODBURI =
  "mongodb+srv://pjblitz86:pjblitz86@cluster0-c1rev.mongodb.net/node-api-posts?retryWrites=true&w=majority";

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(MONGODBURI, { useNewUrlParser: true })
  .then(result => {
    app.listen(8040, () => console.log("server started"));
    console.log("mongo connected");
  })
  .catch(err => console.log(err));
