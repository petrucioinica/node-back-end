"use strict";

const faker = require("faker");
const db = require("../models");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const allRoutes = await db.Route.findAll();
		const allCompanies = await db.Company.findAll();
		const routes_length = allRoutes.length;
		const companies_length = allCompanies.length;
		// todo : put this const in a global file
		const types_of_transport = ["Tram", "Bus", "Trolley", "Metro"];
		const length_of_types_of_transport = types_of_transport.length;

		const data_to_push = [];
		for (let it = 0; it < 100; ++it) {
			// get id's
			let dest = Math.floor(Math.random() * routes_length);
			let depart = Math.floor(Math.random() * routes_length);
			let companyId = Math.floor(Math.random() * companies_length);
			let transportId = Math.floor(
				Math.random() * length_of_types_of_transport
			);

			// make checks and make depart != dest
			if (transportId == length_of_types_of_transport) transportId -= 1;

			if (dest == 0) dest = dest + 1;
			if (depart == 0) depart = depart + 1;

			if (dest == depart) depart += 1;
			if (depart > routes_length) depart = 1;

			if (companyId == 0) companyId = 1;

			data_to_push.push({
				id: it + 1,
				wayOfTransport: types_of_transport[transportId],
				destinationId: dest,
				departureId: depart,
				companyId: companyId,
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		await queryInterface.bulkInsert("Routes", data_to_push, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		db.sequelize
			.query("SET FOREIGN_KEY_CHECKS = 0", null, { raw: true })
			.then(async function (results) {
				await queryInterface.bulkDelete("Routes", null, {});
			});
	},
};
