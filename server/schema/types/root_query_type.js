const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  // GraphQL expects at least one field for every type
  fields: {
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
