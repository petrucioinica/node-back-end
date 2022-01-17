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
const { companyType } = require("./types/companyTypes");
const { getAllCompanies, getCompany } = require("../repository/companies");
const { routeType } = require("./types/routeTypes");
const { getAllRoutes, getRoute } = require("../repository/routes");
const { reviewType } = require("./types/reviewTypes");
const { getAllReviews, getReview } = require("../repository/reviews");

const queryType = new GraphQLObjectType({
	name: "Query",
	fields: {
		users: {
			type: new GraphQLList(userType),
			resolve: () => {
				return getAllUsers();
			},
		},
		user: {
			type: userType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: (source, { id }, context) => {
				return getUserById(id);
			},
		},
		//locations
		locations: {
			type: new GraphQLList(locationType),
			resolve: () => {
				return getAllLocations();
			},
		},
		location: {
			type: locationType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: (source, { id }) => {
				return getLocation(id);
			},
		},
		//companies
		companies: {
			type: new GraphQLList(companyType),
			resolve: () => {
				return getAllCompanies();
			},
		},
		company: {
			type: companyType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: (source, { id }) => {
				return getCompany(id);
			},
		},
		routes: {
			type: new GraphQLList(routeType),
			resolve: (source, args, context) => {
				return getAllRoutes();
			},
		},
		route: {
			type: routeType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: (source, { id }) => {
				return getRoute(id);
			},
		},
		reviews: {
			type: new GraphQLList(reviewType),
			resolve: () => {
				return getAllReviews();
			},
		},
		review: {
			type: reviewType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: (source, { id }) => {
				return getReview(id);
			},
		},
	},
});

module.exports = queryType;
