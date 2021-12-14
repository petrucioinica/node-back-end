const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} = require("graphql");

module.exports.createLocationInputType = new GraphQLInputObjectType({
	name: "CreateLocationInput",
	fields: {
		address: {
			type: new GraphQLNonNull(GraphQLString),
		},
	},
});

module.exports.deleteLocationInputType = new GraphQLInputObjectType({
	name: "DeleteLocationInput",
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID),
		},
	},
});
