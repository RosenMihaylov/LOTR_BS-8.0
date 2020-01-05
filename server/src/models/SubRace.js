module.exports = (sequelize, DataTypes) => {
  const SubRace = sequelize.define("SubRace", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  SubRace.associate = models => {
    SubRace.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    SubRace.belongsTo(models.Race, {
      through: "Races",
      foreignKey: "raceName",
      targetKey: "name"
    });
  };

  return SubRace;
};
