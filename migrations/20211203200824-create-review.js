'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      userId:{
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"Users"
					},
					key:'id',
					onDelete: "cascade"
				}
			},
			routeId:{
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"Reviews"
					},
					key:'id',
					onDelete: "cascade"
				}
			},

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