'use strict';
module.exports = (sequelize, DataTypes) => {
  const phases = sequelize.define('phases', {
    name: DataTypes.STRING,
    cardId: DataTypes.INTEGER
  }, {});
  phases.associate = function(models) {
    // associations can be defined here
  };
  return phases;
};