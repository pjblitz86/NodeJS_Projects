const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const MONGODBURI =
  "mongodb+srv://pjblitz86:pjblitz86@cluster0-c1rev.mongodb.net/node-shop?retryWrites=true&w=majority";

const app = express();
const store = new MongoDBStore({
  uri: MONGODBURI,
  collection: "sessions"
});

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const errorController = require("./controllers/error");

const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);

mongoose
  .connect(MONGODBURI, { useNewUrlParser: true })
  .then(result => {
    console.log("mongo connected");
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: "Paul",
          email: "paul@test.com",
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => console.log(err));
