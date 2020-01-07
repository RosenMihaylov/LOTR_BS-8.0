"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uniqueSubName: {
        type: Sequelize.STRING,
        unique: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subType: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      subRace: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.INTEGER
      },
      vitality: {
        type: Sequelize.INTEGER
      },
      twilightCost: {
        type: Sequelize.INTEGER
      },
      activeFellowshipPhaseSkill: {
        type: Sequelize.STRING
      },
      passiveFellowshipPhaseSkill: {
        type: Sequelize.STRING
      },
      activeShadowPhaseSkill: {
        type: Sequelize.STRING
      },
      passiveShadowPhaseSkill: {
        type: Sequelize.STRING
      },
      activeManeuverPhaseSkill: {
        type: Sequelize.STRING
      },
      passiveManeuverPhaseSkill: {
        type: Sequelize.STRING
      },
      activeArcheryPhaseSkill: {
        type: Sequelize.STRING
      },
      passiveArcheryPhaseSkill: {
        type: Sequelize.STRING
      },
      activeBattlePhaseSkill: {
        type: Sequelize.STRING
      },
      passiveBattlePhaseSkill: {
        type: Sequelize.STRING
      },
      activeFierceBattlePhaseSkill: {
        type: Sequelize.STRING
      },
      passiveFierceBattlePhaseSkill: {
        type: Sequelize.STRING
      },
      imageLink: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cards");
  }
};
