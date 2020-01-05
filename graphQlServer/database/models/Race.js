'use strict';
module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define('Race', {
    name: DataTypes.STRING,
    cardId: DataTypes.INTEGER,
    subRaceId: DataTypes.INTEGER
  }, {});
  Race.associate = function(models) {
    // associations can be defined here
  };
  return Race;
};