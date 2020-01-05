module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("Card", {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    subName: {
      type: DataTypes.STRING,
      unique: true
    },
    strength: DataTypes.INTEGER,
    vitality: DataTypes.INTEGER,
    twilightCost: DataTypes.INTEGER,
    img: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Card.associate = models => {
    Card.belongsTo(models.Type, {
      through: "type",
      foreignKey: "typeName",
      targetKey: "name"
    });
    Card.belongsTo(models.SubType, {
      through: "subType",
      foreignKey: "subTypeName",
      targetKey: "name"
    });
    Card.belongsTo(models.Race, {
      through: "race",
      foreignKey: "raceName",
      targetKey: "name"
    });
    Card.belongsTo(models.SubRace, {
      through: "subRace",
      foreignKey: "subRaceName",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveFellowhipPhaseSkill, {
      through: "activeFellowhipPhaseSkill",
      foreignKey: "activeFellowhipPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveFellowhipPhaseSkill, {
      through: "pasiveFellowhipPhaseSkill",
      foreignKey: "pasiveFellowhipPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveShadowPhaseSkill, {
      through: "activeShadowPhaseSkill",
      foreignKey: "activeShadowPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveShadowPhaseSkill, {
      through: "pasiveShadowPhaseSkill",
      foreignKey: "pasiveShadowPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveManeuverPhaseSkill, {
      through: "activeManeuverPhaseSkill",
      foreignKey: "activeManeuverPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveManeuverPhaseSkill, {
      through: "pasiveManeuverPhaseSkill",
      foreignKey: "pasiveManeuverPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveArcheryPhaseSkill, {
      through: "activeArcheryPhaseSkill",
      foreignKey: "activeArcheryPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveArcheryPhaseSkill, {
      through: "pasiveArcheryPhaseSkill",
      foreignKey: "pasiveArcheryPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveBattlePhaseSkill, {
      through: "activeBattlePhaseSkill",
      foreignKey: "activeBattlePhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveBattlePhaseSkill, {
      through: "pasiveBattlePhaseSkill",
      foreignKey: "pasiveBattlePhaseSkillname",
      targetKey: "name"
    });
  };

  return Card;
};
