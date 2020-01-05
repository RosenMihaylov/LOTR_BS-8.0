'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    cardId: DataTypes.INTEGER,
    subTypeId: DataTypes.INTEGER
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
  };
  return Type;
};