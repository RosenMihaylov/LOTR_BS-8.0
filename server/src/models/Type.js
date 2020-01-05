module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Type.associate = models => {
    Type.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    Type.hasMany(models.Type, {
      through: "SubTypes",
      foreignKey: "subTypeName",
      targetKey: "name"
    });
  };

  return Type;
};
