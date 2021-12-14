const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { companyType } = require("./companyType");
const { locationType } = require("./locationTypes");
const transportEnum = require("./transportEnum");

module.exports.routeType = new GraphQLObjectType({
	name: "Route",
	fields: {
		id: {
			type: GraphQLID,
		},
		destination: { type: locationType },
		departure: { type: locationType },
		company: { type: companyType },
		wayOfTransport: { type: transportEnum },
	},
});

module.exports.deleteRouteResultType = new GraphQLObjectType({
	name: "DeleteRouteResult",
	fields: {
		status: {
			type: GraphQLString,
		},
	},
});
