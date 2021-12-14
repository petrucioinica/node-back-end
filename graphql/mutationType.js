const { GraphQLObjectType } = require("graphql");
const createUserInputType = require("./inputTypes/createUserInputType");
const userType = require("./types/userType");
const { createUser } = require("../repository/users");
const loginInputType = require("./inputTypes/loginInputType");
const loginHandler = require("../repository/login");
const loginResultType = require("./types/loginResultType");

const mutationType = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createUser: {
			type: userType,
			args: {
				createUserInput: {
					type: createUserInputType,
				},
			},
			resolve: async (source, args) => {
				return createUser(args.createUserInput);
			},
		},
		login: {
			type: loginResultType,
			args: {
				loginInput: {
					type: loginInputType,
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
	},
});

module.exports = mutationType;
