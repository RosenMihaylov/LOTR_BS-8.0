module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define("Deck", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Deck.associate = models => {
    Deck.hasMany(models.Card, {
      through: "card",
      foreignKey: "cardId"
    });
    Deck.belongsToOne(models.User, {
      foreignKey: "userId"
    });
  };

  return Deck;
};
