module.exports = (sequelize, DataTypes) => {
  const PassiveArcheryPhaseSkill = sequelize.define(
    "PassiveArcheryPhaseSkill",
    {
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    }
  );

  PassiveArcheryPhaseSkill.associate = models => {
    PassiveArcheryPhaseSkill.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    PassiveArcheryPhaseSkill.belongsTo(models.Phase, {
      through: "Phases",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return PassiveArcheryPhaseSkill;
};
