"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
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
      image: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      subTypeId: {
        type: Sequelize.INTEGER
      },
      raceId: {
        type: Sequelize.INTEGER
      },
      subRaceId: {
        type: Sequelize.INTEGER
      },
      activeSkill: {
        type: Sequelize.STRING
      },
      activeSkillPhaseId: {
        type: Sequelize.INTEGER
      },
      passiveSkill: {
        type: Sequelize.STRING
      },
      passiveSkillPhaseId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("Cards");
  }
};
