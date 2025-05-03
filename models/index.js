const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Import dan jalankan model
const Profile = require("./Profile")(sequelize, DataTypes);
const Schedule = require("./Schedule")(sequelize, DataTypes);

// Ekspor model dan sequelize
module.exports = {
  sequelize,
  Profile,
  Schedule
};
