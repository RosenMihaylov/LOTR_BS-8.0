module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define("Race", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Race.associate = models => {
    Race.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    Race.hasMany(models.SubRace, {
      through: "SubRaces",
      foreignKey: "subRaceName",
      targetKey: "name"
    });
  };

  return Race;
};
