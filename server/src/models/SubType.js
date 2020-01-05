module.exports = (sequelize, DataTypes) => {
  const SubType = sequelize.define("SubType", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  SubType.associate = models => {
    SubType.belongsTo(models.Type, {
      through: "type",
      foreignKey: "typeName",
      targetKey: "name"
    });
    SubType.hasMany(models.Card, {
      through: "cards",
      foreignKey: "cardName",
      targetKey: "name"
    });
  };

  return SubType;
};
