const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLNonNull,
	GraphQLFloat,
} = require("graphql");

const { userType, createUserType} = require("./types/userType");
console.log(userType)
console.log(createUserType)
const { getAllUsers, getUserById } = require("../repository/users");
const { locationType } = require("./types/locationTypes");
const { getAllLocations, getLocation } = require("../repository/locations");
const { companyType } = require("./types/companyTypes");
const {
	getAllCompanies,
	getCompany,
	getCompanyRating,
} = require("../repository/companies");
const { routeType } = require("./types/routeTypes");
const {
	getAllRoutes,
	getRoute,
	getAllCompanysRoutes,
} = require("../repository/routes");
const { reviewType } = require("./types/reviewTypes");
const {
	getAllReviewsForCompany,
	getAllReviewsByUser,
	getAllReviews,
	getReview,
} = require("../repository/reviews");
const { getReviewsInputType } = require("./inputTypes/reviewInputTypes");

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
		companyRating: {
			type: GraphQLFloat,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: (source, { id }) => {
				return getCompanyRating(id);
			},
		},
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
		// routes
		companyRoutes: {
			type: new GraphQLList(routeType),
			args: {
				companyId: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: (source, { companyId }) => {
				return getAllCompanysRoutes(companyId);
			},
		},
		routes: {
			type: new GraphQLList(routeType),
			resolve: () => {
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
		reviewsByUser: {
			type: new GraphQLList(reviewType),
			args: {
				userId: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: (source, { userId }) => {
				return getAllReviewsByUser(userId);
			},
		},
		reviewsForCompany: {
			type: new GraphQLList(reviewType),
			args: {
				companyId: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: (source, { companyId }) => {
				return getAllReviewsForCompany(companyId);
			},
		},
		reviews: {
			type: new GraphQLList(reviewType),
			args: {
				filters: { type: getReviewsInputType },
			},
			resolve: (source, args, context) => {
				return getAllReviews(args);
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
