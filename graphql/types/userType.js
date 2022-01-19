const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLUnionType } = require("graphql");

const userType = new GraphQLObjectType({
	name: "User",
	fields: {
		id: {
			type: GraphQLID,
		},
		email: {
			type: GraphQLString,
		},
		name: {
			type: GraphQLString,
		},
	},
});

module.exports.userType = new GraphQLObjectType({
	name: "User",
	fields: {
		id: {
			type: GraphQLID,
		},
		email: {
			type: GraphQLString,
		},
		name: {
			type: GraphQLString,
		},
	},
});

const errorMessageType = new GraphQLObjectType({
	name: "ErrorMessage",
	fields: {
		errorMessage: {
			type: GraphQLString,
		},
	},
});

module.exports.createUserType = new GraphQLUnionType({
	name: 'CreateUser',
	types: [errorMessageType, userType],
	resolveType(value) {
	  if (value instanceof ErrorMessage) {
		return errorMessageType;
	  }
	  if (value instanceof User) {
		return userType;
	  }
	}
  });


