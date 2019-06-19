const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_shop", "root", "juknelis86", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
