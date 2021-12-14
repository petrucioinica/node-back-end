const jwt = require("jsonwebtoken");
const { KEY } = require("../config/jwt");
const db = require("../models");

const loginHandler = async (email, password) => {
	const user = await db.User.findOne({
		where: {
			email,
			password,
		},
	});

	if (user) {
		return jwt.sign(
			{
				id: user.id,
				name: user.name,
				email: user.email,
			},
			KEY
		);
	} else {
		return null;
	}
};

module.exports = loginHandler;
