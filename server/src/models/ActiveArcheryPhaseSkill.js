module.exports = (sequelize, DataTypes) => {
  const ActiveArcheryPhaseSkill = sequelize.define("ActiveArcheryPhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  ActiveArcheryPhaseSkill.associate = models => {
    ActiveArcheryPhaseSkill.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    ActiveFellowshipPhaseSkill.belongsTo(models.Phase, {
      through: "phase",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return ActiveArcheryPhaseSkill;
};
