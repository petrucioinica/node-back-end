const { GraphQLEnumType } = require("graphql");

const ratingEnum = new GraphQLEnumType({
	name: "RatingEnum",
	description: "Enum for rating",
	values: {
		one: { value: 1 },
		two: { value: 2 },
		three: { value: 3 },
		four: { value: 4 },
		five: { value: 5 },
	},
});

module.exports = ratingEnum;
