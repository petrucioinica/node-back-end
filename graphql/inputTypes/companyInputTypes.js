const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} = require("graphql");

module.exports.createCompanyInputType = new GraphQLInputObjectType({
	name: "CreateCompanyInput",
	fields: {
		name: {
			type: new GraphQLNonNull(GraphQLString),
		},
	},
});

module.exports.deleteCompanyInputType = new GraphQLInputObjectType({
	name: "DeleteCompanyInput",
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID),
		},
	},
});
