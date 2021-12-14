const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLNonNull,
} = require("graphql");

const userType = require("./types/userType");
const { getAllUsers, getUserById } = require("../repository/users");
const { locationType } = require("./types/locationTypes");
const { getAllLocations, getLocation } = require("../repository/locations");
const { companyType } = require("./types/companyType");
const { getAllCompanies, getCompany } = require("../repository/companies");
const { routeType } = require("./types/routeTypes");
const { getAllRoutes, getRoute } = require("../repository/routes");

const queryType = new GraphQLObjectType({
	name: "Query",
	fields: {
		users: {
			type: new GraphQLList(userType),
			resolve: async () => {
				return await getAllUsers();
			},
		},
		user: {
			type: userType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (source, { id }, context) => {
				return getUserById(id);
			},
		},
		//locations
		locations: {
			type: new GraphQLList(locationType),
			resolve: async () => {
				return await getAllLocations();
			},
		},
		location: {
			type: locationType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (source, { id }) => {
				return getLocation(id);
			},
		},
		//companies
		companies: {
			type: new GraphQLList(companyType),
			resolve: async () => {
				return await getAllCompanies();
			},
		},
		company: {
			type: companyType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (source, { id }) => {
				return getCompany(id);
			},
		},
		routes: {
			type: new GraphQLList(routeType),
			resolve: async () => {
				return getAllRoutes();
			},
		},
		route: {
			type: routeType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: async (source, { id }) => {
				return getRoute(id);
			},
		},
	},
});

module.exports = queryType;
