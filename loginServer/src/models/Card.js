module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
    cardSet: {
      type: DataTypes.STRING,
      nonNull: true
    },
    name: {
      type: DataTypes.STRING,
      nonNull: true
    },
    uniqueSubName: {
      type: DataTypes.STRING,
      unique: true
    },
    cardType: {
      type: DataTypes.STRING,
      nonNull: true
    },
    cardSubType: DataTypes.STRING,
    kind: DataTypes.STRING,
    culture: DataTypes.STRING,
    title: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    vitality: DataTypes.INTEGER,
    twilight: DataTypes.INTEGER,
    resistance: DataTypes.INTEGER,
    signet: DataTypes.STRING,
    restriction: DataTypes.STRING,
    responseSkill: DataTypes.STRING,
    activeFellowshipPhaseSkill: DataTypes.STRING,
    passiveFellowshipPhaseSkill: DataTypes.STRING,
    activeShadowPhaseSkill: DataTypes.STRING,
    passiveShadowPhaseSkill: DataTypes.STRING,
    activeManeuverPhaseSkill: DataTypes.STRING,
    passiveManeuverPhaseSkill: DataTypes.STRING,
    activeArcheryPhaseSkill: DataTypes.STRING,
    passiveArcheryPhaseSkill: DataTypes.STRING,
    activeBattlePhaseSkill: DataTypes.STRING,
    passiveBattlePhaseSkill: DataTypes.STRING,
    cardImageLink: {
      type: DataTypes.TEXT,
      unique: true
    }
  });

  return Card;
};
