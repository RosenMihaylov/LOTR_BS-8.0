const Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Phase = sequelize.define("phase", {
    name: {
      type: Sequelize.STRING,
      unique: true
    }
  });

  return Phase;
};
