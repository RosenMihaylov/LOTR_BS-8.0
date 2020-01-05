module.exports = (sequelize, DataTypes) => {
  const PassiveBattlePhaseSkill = sequelize.define("PassiveBattlePhaseSkill", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  PassiveBattlePhaseSkill.associate = models => {
    PassiveBattlePhaseSkill.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    PassiveBattlePhaseSkill.belongsTo(models.Phase, {
      through: "phase",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return PassiveBattlePhaseSkill;
};
