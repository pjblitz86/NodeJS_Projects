const express = require("express");

const router = express.Router();
const userData = require("./form");

router.get("/users", (req, res, next) => {
  const users = userData.users;
  res.render("users", {
    pageTitle: "Users",
    users
  });
});

module.exports = router;
