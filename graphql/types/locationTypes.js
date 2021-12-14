const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

module.exports.locationType = new GraphQLObjectType({
	name: "Location",
	fields: {
		id: {
			type: GraphQLID,
		},
		address: {
			type: GraphQLString,
		},
	},
});

module.exports.createLocationResultType = new GraphQLObjectType({
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

module.exports.deleteLocationResultType = new GraphQLObjectType({
	name: "DeletLocationResult",
	fields: {
		status: {
			type: GraphQLString,
		},
	},
});
