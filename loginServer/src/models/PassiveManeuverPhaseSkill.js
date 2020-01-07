module.exports = (sequelize, DataTypes) => {
  const PassiveManeuverPhaseSkill = sequelize.define(
    "PassiveManeuverPhaseSkill",
    {
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    }
  );

  PassiveManeuverPhaseSkill.associate = models => {
    PassiveManeuverPhaseSkill.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    PassiveManeuverPhaseSkill.belongsTo(models.Phase, {
      through: "Phases",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return PassiveManeuverPhaseSkill;
};
