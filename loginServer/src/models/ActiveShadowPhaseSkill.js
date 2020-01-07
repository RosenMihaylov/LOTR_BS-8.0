module.exports = (sequelize, DataTypes) => {
  const ActiveShadowPhaseSkill = sequelize.define("ActiveShadowPhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  ActiveShadowPhaseSkill.associate = models => {
    ActiveShadowPhaseSkill.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    ActiveShadowPhaseSkill.belongsTo(models.Phase, {
      through: "Phases",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return ActiveShadowPhaseSkill;
};
