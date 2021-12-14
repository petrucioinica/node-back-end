const { GraphQLEnumType } = require("graphql");

const transportEnum = new GraphQLEnumType({
	name: "TransportEnum",
	description: "Enum for the way of transport used in a route",
	values: {
		taxi: { value: "taxi" },
		bus: { value: "bus" },
		metro: { value: "metro" },
		tram: { value: "tram" },
	},
});

module.exports = transportEnum;
