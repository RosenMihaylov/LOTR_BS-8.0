'use strict';
module.exports = (sequelize, DataTypes) => {
  const subType = sequelize.define('subType', {
    name: DataTypes.STRING,
    cardId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  subType.associate = function(models) {
    // associations can be defined here
  };
  return subType;
};