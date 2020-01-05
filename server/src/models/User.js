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
      through: Deck,
      foreignKey: "deckid"
    });
  };

  return User;
};
