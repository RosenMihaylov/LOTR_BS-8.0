"use strict";
module.exports = (sequelize, DataTypes) => {
  const SubType = sequelize.define(
    "subType",
    {
      name: DataTypes.STRING,
      cardId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER
    },
    {}
  );
  SubType.associate = function(models) {
    // associations can be defined here
    SubType.belongsTo(models.Type, {
      foreignKey: "typeId",
      as: "type to whitch this sub-type belongs",
      onDelete: "CASCADE"
    });
    SubType.hasMany(models.Card, {
      foreignKey: "cardId",
      as: "cards of this type",
      onDelete: "CASCADE"
    });
  };
  return SubType;
};
