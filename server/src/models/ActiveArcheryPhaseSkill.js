module.exports = (sequelize, DataTypes) => {
  const ActiveArcheryPhaseSkill = sequelize.define("ActiveArcheryPhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  ActiveArcheryPhaseSkill.associate = models => {
    ActiveArcheryPhaseSkill.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    ActiveFellowshipPhaseSkill.belongsTo(models.Phase, {
      through: "Phases",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return ActiveArcheryPhaseSkill;
};
