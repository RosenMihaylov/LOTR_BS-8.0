module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define("Race", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Race.associate = models => {
    Race.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
  };

  return Race;
};
