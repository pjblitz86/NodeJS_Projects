const express = require("express");
const path = require("path");
const feedRoutes = require("./routes/feed");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();
const MONGODBURI =
  "mongodb+srv://pjblitz86:pjblitz86@cluster0-c1rev.mongodb.net/node-api-posts?retryWrites=true&w=majority";

const uuidv4 = require("uuid/v4");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    let extension = file.originalname.split(".").pop();
    cb(null, uuidv4() + "." + extension);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/images", express.static(path.join(__dirname, "images")));

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
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MONGODBURI, { useNewUrlParser: true })
  .then(result => {
    app.listen(8040, () => console.log("server started"));
    console.log("mongo connected");
  })
  .catch(err => console.log(err));
