'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      comfortRating: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      trafficRating: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      generalRating: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      notes: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reviews');
  }
};