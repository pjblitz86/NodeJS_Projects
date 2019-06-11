const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const formRoute = require("./routes/form");
const usersRoute = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(formRoute.routes);
app.use(usersRoute);

app.listen(3000);
