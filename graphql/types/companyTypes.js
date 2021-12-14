const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

module.exports.companyType = new GraphQLObjectType({
	name: "Company",
	fields: {
		id: {
			type: GraphQLID,
		},
		name: {
			type: GraphQLString,
		},
	},
});

module.exports.deleteCompanyType = new GraphQLObjectType({
	name: "DeleteCompanyResult",
	fields: {
		status: {
			type: GraphQLString,
		},
	},
});
