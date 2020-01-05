module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define("Deck", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Deck.associate = models => {
    Deck.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    Deck.belongsTo(models.User, {
      through: "Users",
      foreignKey: "userName",
      targetKey: "name"
    });
  };

  return Deck;
};
