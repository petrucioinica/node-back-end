const { GraphQLInputObjectType, GraphQLString } = require("graphql");

const updateUserInputType = new GraphQLInputObjectType({
	name: "UpdateUserInput",
	fields: {
		name: {
			type: GraphQLString,
		},
		email: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString,
		},
	},
});

module.exports = updateUserInputType;
