module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Deck, {
      through: "Decks",
      foreignKey: "deckName",
      targetKey: "name"
    });
  };

  return User;
};
