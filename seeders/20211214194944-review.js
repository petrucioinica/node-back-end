'use strict';
const faker = require('faker');
const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allUsers = await db.User.findAll()
    const allRoutes = await db.Route.findAll()
    const users_length = allUsers.length;
    const routes_length = allRoutes.length;


    const data_to_push = [];
    for (let it = 0; it < 100; ++it){
      // get id's
      let routeId = Math.floor(Math.random() * (routes_length ))
      let userId = Math.floor(Math.random() * (users_length ))
      let comfortRating = Math.floor(Math.random() * (10))
      let trafficRating = Math.floor(Math.random() * (10))
      let generalRating = Math.floor(Math.random() * (10))
      // make checks and make depart != dest

      if (routeId == 0)
        routeId = routeId + 1
      if (userId == 0)
        userId = userId + 1
      


      data_to_push.push({
        id: it + 1,
        userId: userId,
        routeId:routeId,
        departureTime : new Date(),
        arrivalTime : new Date(), 
        comfortRating : comfortRating,
        trafficRating : trafficRating,
        generalRating : generalRating,
        notes : faker.lorem.words(5),
        createdAt : new Date(),
        updatedAt : new Date() 
      })
    }
    await queryInterface.bulkInsert("Reviews", data_to_push, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {raw: true});
     await queryInterface.bulkDelete('Reviews', null, {});
  }
};
