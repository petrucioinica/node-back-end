'use strict';
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const data_to_push = [];
    for (let it = 0; it < 100; ++it){
      data_to_push.push({
        id: it + 1,
        address: faker.address.streetName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert("Locations", data_to_push, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {raw: true});
     await queryInterface.bulkDelete('Locations', null, {});
  }
};
