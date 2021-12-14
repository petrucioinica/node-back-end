const db = require("../models");

module.exports.createLocation = async (address) => {
	try {
		const newLocation = await db.Location.create({
			address,
		});
		return newLocation;
	} catch (err) {
		console.error(err);
		return null;
	}
};
