module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("cards", [
      {
        name: "Aragorn",
        uniqueSubName: "Captain of Gondor",
        type: "Companion",
        subType: "Knight",
        race: "Gondor",
        subRace: "Man",
        strength: 8,
        vitality: 4,
        twilightCost: 4,
        activeFellowshipPhaseSkill: "startingHeal",
        passiveFellowshipPhaseSkill: null,
        activeShadowPhaseSkill: null,
        passiveShadowPhaseSkill: null,
        activeManeuverPhaseSkill: null,
        passiveManeuverPhaseSkill: null,
        activeArcheryPhaseSkill: null,
        passiveArcheryPhaseSkill: null,
        activeBattlePhaseSkill: null,
        passiveBattlePhaseSkill: null,
        activeFierceBattlePhaseSkill: null,
        passiveFierceBattlePhaseSkill: null,
        imageLink: "http://lotrtcgwiki.com/wiki/_media/cards:lotr00023.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Enquea",
        uniqueSubName: "Lieutenant of Morgul",
        type: "Minion",
        subType: null,
        race: "Wraith",
        subRace: "Nazgul",
        strength: 11,
        vitality: 4,
        twilightCost: 3,
        activeFellowshipPhaseSkill: null,
        passiveFellowshipPhaseSkill: null,
        activeShadowPhaseSkill: null,
        passiveShadowPhaseSkill: null,
        activeManeuverPhaseSkill: "sniper",
        passiveManeuverPhaseSkill: null,
        activeArcheryPhaseSkill: null,
        passiveArcheryPhaseSkill: null,
        activeBattlePhaseSkill: null,
        passiveBattlePhaseSkill: "fierce",
        activeFierceBattlePhaseSkill: null,
        passiveFierceBattlePhaseSkill: "fierce",
        imageLink: "http://lotrtcgwiki.com/wiki/_media/cards:lotr01231.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("cards", null, {})
};
