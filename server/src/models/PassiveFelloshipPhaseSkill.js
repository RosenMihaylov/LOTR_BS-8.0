module.exports = (sequelize, DataTypes) => {
  const PassiveFellowhipPhaseSkill = sequelize.define(
    "PassiveFellowhipPhaseSkill",
    {
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    }
  );

  PassiveFellowhipPhaseSkill.associate = models => {
    PassiveFellowhipPhaseSkill.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    PassiveFellowshipPhaseSkill.belongsTo(models.Phase, {
      through: "phase",
      foreignKey: "phaseName",
      targetKey: "name"
    });
  };

  return PassiveFellowhipPhaseSkill;
};
