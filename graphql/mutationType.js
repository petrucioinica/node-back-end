const { GraphQLObjectType, GraphQLNonNull, GraphQLID } = require("graphql");
const createUserInputType = require("./inputTypes/createUserInputType");
const userType = require("./types/userType");
const { createUser, updateUser } = require("../repository/users");
const loginInputType = require("./inputTypes/loginInputType");
const loginHandler = require("../repository/login");
const loginResultType = require("./types/loginResultType");
const {
	createLocationResultType,
	deleteLocationResultType,
} = require("./types/locationTypes");
const {
	createLocationInputType,
	deleteLocationInputType,
} = require("./inputTypes/locationInputTypes");
const { createLocation, deleteLocation } = require("../repository/locations");
const { companyType, deleteCompanyType } = require("./types/companyTypes");
const { deleteCompany, createCompany } = require("../repository/companies");
const {
	createCompanyInputType,
	deleteCompanyInputType,
} = require("./inputTypes/companyInputTypes");
const { routeType, deleteRouteResultType } = require("./types/routeTypes");

const {
	createRouteInputType,
	deleteRouteInputType,
} = require("./inputTypes/routeInputTypes");
const { createRoute, deleteRoute } = require("../repository/routes");
const { reviewType } = require("./types/reviewTypes");
const { createReviewInputType } = require("./inputTypes/reviewInputTypes");
const { createReview } = require("../repository/reviews");
const updateUserInputType = require("./inputTypes/updateUserInputType");
const mutationType = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createUser: {
			type: userType,
			args: {
				createUserInput: {
					type: new GraphQLNonNull(createUserInputType),
				},
			},
			resolve: async (source, args) => {
				return createUser(args.createUserInput);
			},
		},
		deleteUser: {
			type: deleteLocationResultType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: async (source, args) => {
				return deleteUser(args);
			},
		},
		login: {
			type: loginResultType,
			args: {
				loginInput: {
					type: new GraphQLNonNull(loginInputType),
				},
			},
			resolve: (source, args) => {
				const { email, password } = args.loginInput;

				const token = loginHandler(email, password);

				return {
					token,
				};
			},
		},
		//location
		createLocation: {
			type: createLocationResultType,
			args: {
				locationInput: {
					type: new GraphQLNonNull(createLocationInputType),
				},
			},
			resolve: async (source, args) => {
				const { address } = args.locationInput;
				return createLocation(address);
			},
		},
		deleteLocation: {
			type: deleteLocationResultType,
			args: {
				deleteLocationInput: {
					type: new GraphQLNonNull(deleteLocationInputType),
				},
			},
			resolve: async (source, args) => {
				return deleteLocation(args.deleteLocationInput);
			},
		},

		//company
		createCompany: {
			type: companyType,
			args: {
				createCompanyInput: {
					type: new GraphQLNonNull(createCompanyInputType),
				},
			},
			resolve: async (source, args) => {
				return createCompany(args.createCompanyInput);
			},
		},
		deleteCompany: {
			type: deleteCompanyType,
			args: {
				deleteCompanyInput: {
					type: new GraphQLNonNull(deleteCompanyInputType),
				},
			},
			resolve: async (source, args) => {
				return deleteCompany(args.deleteCompanyInput.id);
			},
		},
		createRoute: {
			type: routeType,
			args: {
				createRouteInput: {
					type: new GraphQLNonNull(createRouteInputType),
				},
			},
			resolve: async (source, args) => {
				return createRoute(args.createRouteInput);
			},
		},
		deleteRoute: {
			type: deleteRouteResultType,
			args: {
				deleteRouteInput: {
					type: new GraphQLNonNull(deleteRouteInputType),
				},
			},
			resolve: (source, args) => {
				return deleteRoute(args.deleteRouteInput.id);
			},
		},
		createReview: {
			type: reviewType,
			args: {
				createReviewInput: {
					type: new GraphQLNonNull(createReviewInputType),
				},
			},
			resolve: (source, args) => {
				return createReview(args.createReviewInput);
			},
		},
		updateUser: {
			type: userType,
			args: {
				updateUserInput: { type: updateUserInputType },
			},
			resolve: async (source, args, context) => {
				return updateUser(args.updateUserInput, context);
			},
		},
	},
});

module.exports = mutationType;
