module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Type.associate = models => {
    Type.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
    Type.hasMany(models.Type, {
      through: "subType",
      foreignKey: "subTypeName",
      targetKey: "name"
    });
  };

  return Type;
};
