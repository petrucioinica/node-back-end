'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destinationId:{
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"Locations"
					},
					key:'id',
					onDelete: "cascade"
				}
			},
			departureId:{
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"Locations"
					},
					key:'id',
					onDelete: "cascade"
				}
			},
			companyId:{
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"Companies"
					},
					key:'id',
					onDelete: "cascade"
				}
			},
      wayOfTransport: {
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
    await queryInterface.dropTable('Routes');
  }
};