module.exports = (sequelize, DataTypes) => {
  const PassiveShadowPhaseSkill = sequelize.define("PassiveShadowPhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  PassiveShadowPhaseSkill.associate = models => {
    PassiveShadowPhaseSkill.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    PassiveShadowPhaseSkill.belongsTo(models.Phase, {
      through: "phase",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return PassiveShadowPhaseSkill;
};
