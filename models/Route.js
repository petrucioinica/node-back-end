const { DataTypes, Model, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
	class Route extends Model {
		static associate(models) {}
	}

	Route.init(
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			wayOfTransport: {
				type: DataTypes.STRING, //is actually an enum, will document possible values bcs mysql is retarded and doesn't have enum
				allowNull: false,
			},
		},
		{ sequelize }
	);
	return Route;
};
