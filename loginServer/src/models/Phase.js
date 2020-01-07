module.exports = (sequelize, DataTypes) => {
  const Phase = sequelize.define("Phase", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Phase.associate = models => {
    Phase.hasMany(models.ActiveFellowshipPhaseSkill, {
      through: "ActiveFellowshipPhaseSkills",
      foreignKey: "activeFellowshipPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveFellowshipPhaseSkill, {
      through: "PassiveFellowshipPhaseSkills",
      foreignKey: "passiveFellowshipPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveShadowPhaseSkill, {
      through: "ActiveShadowPhaseSkills",
      foreignKey: "activeShadowPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveShadowPhaseSkill, {
      through: "PassiveShadowPhaseSkills",
      foreignKey: "passiveShadowPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveManeuverPhaseSkill, {
      through: "ActiveManeuverPhaseSkills",
      foreignKey: "activeManeuverPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveManeuverPhaseSkill, {
      through: "PassiveManeuverPhaseSkills",
      foreignKey: "passiveManeuverPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveArcheryPhaseSkill, {
      through: "ActiveArcheryPhaseSkills",
      foreignKey: "activeArcheryPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveArcheryPhaseSkill, {
      through: "PassiveArcheryPhaseSkills",
      foreignKey: "passiveArcheryPhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.ActiveBattlePhaseSkill, {
      through: "ActiveBattlePhaseSkills",
      foreignKey: "activeBattlePhaseSkillName",
      targetKey: "name"
    });
    Phase.hasMany(models.PassiveBattlePhaseSkill, {
      through: "PassiveBattlePhaseSkills",
      foreignKey: "passiveBattlePhaseSkillName",
      targetKey: "name"
    });
  };

  return Phase;
};
