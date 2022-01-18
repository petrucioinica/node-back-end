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

module.exports.updateReviewInputType = new GraphQLInputObjectType({
	name: "UpdateReviewInput",
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID),
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
		departureTime: {
			type: GraphQLString,
		},
		arrivalTime: {
			type: GraphQLString,
		},
	},
});

module.exports.getReviewsInputType = new GraphQLInputObjectType({
	name: "GetReviewsInputType",
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
		userId: { type: GraphQLID },
		route: { type: GraphQLID },
	},
});
