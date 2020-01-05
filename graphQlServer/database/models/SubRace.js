'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubRace = sequelize.define('SubRace', {
    name: DataTypes.STRING,
    cardId: DataTypes.INTEGER,
    raceId: DataTypes.INTEGER
  }, {});
  SubRace.associate = function(models) {
    // associations can be defined here
  };
  return SubRace;
};