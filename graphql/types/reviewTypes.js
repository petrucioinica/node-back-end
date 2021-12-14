const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} = require("graphql");
const ratingEnum = require("./ratingEnum");
const { routeType } = require("./routeTypes");
const userType = require("./userType");

module.exports.reviewType = new GraphQLObjectType({
	name: "Review",
	fields: {
		id: {
			type: GraphQLID,
		},
		departureTime: {
			type: GraphQLString,
		},
		arrivalTime: {
			type: GraphQLString,
		},
		comfortRating: {
			type: ratingEnum,
		},
		trafficRating: {
			type: ratingEnum,
		},
		generalRating: {
			type: ratingEnum,
		},
		notes: {
			type: GraphQLString,
		},
		user: { type: userType },
		route: { type: routeType },
	},
});

module.exports.deleteReviewResultType = new GraphQLObjectType({
	name: "DeleteReviewResult",
	fields: {
		status: {
			type: GraphQLString,
		},
	},
});
