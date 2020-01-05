"use strict";
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      name: DataTypes.STRING,
      cardId: DataTypes.INTEGER,
      subTypeId: DataTypes.INTEGER
    },
    {}
  );
  Type.associate = function(models) {
    // associations can be defined here
    Type.hasMany(models.Card, {
      foreignKey: "cardId",
      as: "cards of this type",
      onDelete: "CASCADE"
    });
    Type.hasMany(models.SubType, {
      foreignKey: "subTypeId",
      as: "sub-types of this type",
      onDelete: "CASCADE"
    });
  };
  return Type;
};
