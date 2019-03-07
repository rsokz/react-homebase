const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const NBAType = new GraphQLObjectType({
  name: 'NBAType',
  fields: {
    dailygameschedule: {
      type: GraphQLString
    }
  }
});

module.exports = NBAType;
