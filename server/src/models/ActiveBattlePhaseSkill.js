module.exports = (sequelize, DataTypes) => {
  const ActiveBattlePhaseSkill = sequelize.define("ActiveBattlePhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  ActiveBattlePhaseSkill.associate = models => {
    ActiveBattlePhaseSkill.hasMany(models.Card, {
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

  return ActiveBattlePhaseSkill;
};
