module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "phases",
      [
        {
          name: "Fellowhip",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shadow",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("phases", null, {})
};
