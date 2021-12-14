'use strict';
const faker = require('faker');
const db = require('../models');
const crypto = require('crypto');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data_to_push = [];
    for (let it = 0; it < 100; ++it){
      data_to_push.push({
        id:it + 1,
        password: crypto.createHash('sha256').update(faker.internet.password()).digest('hex'),
        email : faker.internet.email(),
        name : faker.name.firstName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert("Users", data_to_push, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
