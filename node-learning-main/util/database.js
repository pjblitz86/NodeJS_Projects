const Sequelize = require("sequelize/index");

const sequelize = new Sequelize("node_shop", "root", "juknelis86", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
