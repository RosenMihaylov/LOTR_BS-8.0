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
      through: "Types",
      foreignKey: "typeName",
      targetKey: "name"
    });
    Card.belongsTo(models.SubType, {
      through: "SubTypes",
      foreignKey: "subTypeName",
      targetKey: "name"
    });
    Card.belongsTo(models.Race, {
      through: "Races",
      foreignKey: "raceName",
      targetKey: "name"
    });
    Card.belongsTo(models.SubRace, {
      through: "SubRaces",
      foreignKey: "subRaceName",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveFellowhipPhaseSkill, {
      through: "ActiveFellowhipPhaseSkills",
      foreignKey: "activeFellowhipPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveFellowhipPhaseSkill, {
      through: "PasiveFellowhipPhaseSkills",
      foreignKey: "pasiveFellowhipPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveShadowPhaseSkill, {
      through: "ActiveShadowPhaseSkills",
      foreignKey: "activeShadowPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveShadowPhaseSkill, {
      through: "PasiveShadowPhaseSkills",
      foreignKey: "pasiveShadowPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveManeuverPhaseSkill, {
      through: "ActiveManeuverPhaseSkills",
      foreignKey: "activeManeuverPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveManeuverPhaseSkill, {
      through: "PasiveManeuverPhaseSkills",
      foreignKey: "pasiveManeuverPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveArcheryPhaseSkill, {
      through: "ActiveArcheryPhaseSkills",
      foreignKey: "activeArcheryPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveArcheryPhaseSkill, {
      through: "PasiveArcheryPhaseSkills",
      foreignKey: "pasiveArcheryPhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.ActiveBattlePhaseSkill, {
      through: "ActiveBattlePhaseSkills",
      foreignKey: "activeBattlePhaseSkillname",
      targetKey: "name"
    });
    Card.belongsTo(models.PasiveBattlePhaseSkill, {
      through: "PasiveBattlePhaseSkills",
      foreignKey: "pasiveBattlePhaseSkillname",
      targetKey: "name"
    });
  };

  return Card;
};
