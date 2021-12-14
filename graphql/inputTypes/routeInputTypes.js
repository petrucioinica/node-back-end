const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} = require("graphql");
const transportEnum = require("../types/transportEnum");

module.exports.createRouteInputType = new GraphQLInputObjectType({
	name: "CreateRouteInput",
	fields: {
		destination: {
			type: GraphQLID,
		},
		departure: {
			type: GraphQLID,
		},
		company: {
			type: GraphQLID,
		},
		wayOfTransport: { type: transportEnum },
	},
});

module.exports.deleteRouteInputType = new GraphQLInputObjectType({
	name: "DeleteRouteInput",
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID),
		},
	},
});
