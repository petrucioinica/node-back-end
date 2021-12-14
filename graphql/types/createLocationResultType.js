const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const createLocationResultType = new GraphQLObjectType({
	name: "CreateLocationResult",
	fields: {
		address: {
			type: GraphQLString,
		},
		id: {
			type: GraphQLID,
		},
	},
});

module.exports = createLocationResultType;
