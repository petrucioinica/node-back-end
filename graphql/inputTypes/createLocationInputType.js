const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require("graphql");

const createLocationInputType = new GraphQLInputObjectType({
	name: "CreateLocationInput",
	fields: {
		address: {
			type: new GraphQLNonNull(GraphQLString),
		},
	},
});

module.exports = createLocationInputType;
