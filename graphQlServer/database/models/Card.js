"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      name: DataTypes.STRING,
      strength: DataTypes.INTEGER,
      vitality: DataTypes.INTEGER,
      twilightCost: DataTypes.INTEGER,
      image: DataTypes.TEXT,
      typeId: DataTypes.INTEGER,
      subTypeId: DataTypes.INTEGER,
      raceId: DataTypes.INTEGER,
      subRaceId: DataTypes.INTEGER,
      activeSkill: DataTypes.STRING,
      activeSkillPhaseId: DataTypes.INTEGER,
      passiveSkill: DataTypes.STRING,
      passiveSkillPhaseId: DataTypes.INTEGER
    },
    {}
  );
  Card.associate = function(models) {
    // associations can be defined here
    Card.belongsTo(models.Type, {
      foreignKey: "typeId",
      as: "type of the card",
      onDelete: "CASCADE"
    });
  };
  return Card;
};
