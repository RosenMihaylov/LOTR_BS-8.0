module.exports = (sequelize, DataTypes) => {
  const SubType = sequelize.define("SubType", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  SubType.associate = models => {
    SubType.belongsTo(models.Type, {
      through: "Types",
      foreignKey: "typeName",
      targetKey: "name"
    });
    SubType.hasMany(models.Card, {
      through: "Cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
  };

  return SubType;
};
