"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "card",
    {
      name: DataTypes.STRING,
      uniqueSubName: DataTypes.STRING,
      type: DataTypes.STRING,
      subType: DataTypes.STRING,
      race: DataTypes.STRING,
      subRace: DataTypes.STRING,
      strength: DataTypes.INTEGER,
      vitality: DataTypes.INTEGER,
      twilightCost: DataTypes.INTEGER,
      activeFellowshipPhaseSkill: DataTypes.STRING,
      passiveFellowshipPhaseSkill: DataTypes.STRING,
      activeShadowPhaseSkill: DataTypes.STRING,
      passiveShadowPhaseSkill: DataTypes.STRING,
      activeManeuverPhaseSkill: DataTypes.STRING,
      passiveManeuverPhaseSkill: DataTypes.STRING,
      activeArcheryPhaseSkill: DataTypes.STRING,
      passiveArcheryPhaseSkill: DataTypes.STRING,
      activeBattlePhaseSkill: DataTypes.STRING,
      passiveBattlePhaseSkill: DataTypes.STRING,
      activeFierceBattlePhaseSkill: DataTypes.STRING,
      passiveFierceBattlePhaseSkill: DataTypes.STRING,
      imageLink: DataTypes.TEXT
    },
    {}
  );
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};
