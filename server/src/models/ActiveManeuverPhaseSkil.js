module.exports = (sequelize, DataTypes) => {
  const ActiveManeuverPhaseSkill = sequelize.define(
    "ActiveManeuverPhaseSkill",
    {
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    }
  );

  ActiveManeuverPhaseSkill.associate = models => {
    ActiveManeuverPhaseSkill.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    ActiveManeuverPhaseSkill.belongsTo(models.Phase, {
      through: "Phases",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return ActiveManeuverPhaseSkill;
};
