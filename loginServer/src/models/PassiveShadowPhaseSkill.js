module.exports = (sequelize, DataTypes) => {
  const PassiveShadowPhaseSkill = sequelize.define("PassiveShadowPhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  PassiveShadowPhaseSkill.associate = models => {
    PassiveShadowPhaseSkill.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    PassiveShadowPhaseSkill.belongsTo(models.Phase, {
      through: "Phases",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return PassiveShadowPhaseSkill;
};
