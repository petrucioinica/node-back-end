const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} = require("graphql");
const ratingEnum = require("../types/ratingEnum");

module.exports.createReviewInputType = new GraphQLInputObjectType({
	name: "CreateReviewInput",
	fields: {
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
		user: { type: GraphQLID },
		route: { type: GraphQLID },
	},
});

module.exports.deleteReviewInputType = new GraphQLInputObjectType({
	name: "DeleteReviewInput",
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID),
		},
	},
});
