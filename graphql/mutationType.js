const { GraphQLObjectType } = require("graphql");
const createUserInputType = require("./inputTypes/createUserInputType");
const userType = require("./types/userType");
const { createUser, updateUser } = require("../repository/users");

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
	},
});

module.exports = mutationType;
