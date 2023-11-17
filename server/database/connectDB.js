const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("Restaurentls", "admin", "mPSKSmJs", {
  host: "mysql-154596-0.cloudclusters.net",
  dialect: "mysql",
  port: 18258,
});

module.exports = sequelize;
