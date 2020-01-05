module.exports = (sequelize, DataTypes) => {
  const ActiveFellowhipPhaseSkill = sequelize.define(
    "ActiveFellowhipPhaseSkill",
    {
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    }
  );

  ActiveFellowhipPhaseSkill.associate = models => {
    ActiveFellowhipPhaseSkill.hasMany(models.Card, {
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

  return ActiveFellowhipPhaseSkill;
};
