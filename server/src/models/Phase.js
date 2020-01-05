module.exports = (sequelize, DataTypes) => {
  const Phase = sequelize.define("Phase", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Phase.associate = models => {
    Phase.hasMany(models.ActiveFellowshipPhaseSkill, {
      through: "activeFellowshipPhaseSkills",
      foreignKey: "activeFellowshipPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveFellowshipPhaseSkill, {
      through: "passiveFellowshipPhaseSkills",
      foreignKey: "passiveFellowshipPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveShadowPhaseSkill, {
      through: "activeShadowPhaseSkills",
      foreignKey: "activeShadowPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveShadowPhaseSkill, {
      through: "passiveShadowPhaseSkills",
      foreignKey: "passiveShadowPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveManeuverPhaseSkill, {
      through: "activeManeuverPhaseSkills",
      foreignKey: "activeManeuverPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveManeuverPhaseSkill, {
      through: "passiveManeuverPhaseSkills",
      foreignKey: "passiveManeuverPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveArcheryPhaseSkill, {
      through: "activeArcheryPhaseSkills",
      foreignKey: "activeArcheryPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveArcheryPhaseSkill, {
      through: "passiveArcheryPhaseSkills",
      foreignKey: "passiveArcheryPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveBattlePhaseSkill, {
      through: "activeBattlePhaseSkills",
      foreignKey: "activeBattlePhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveBattlePhaseSkill, {
      through: "passiveBattlePhaseSkills",
      foreignKey: "passiveBattlePhaseSkillName",
      targetKey: "name"
    });
  };

  return Phase;
};
