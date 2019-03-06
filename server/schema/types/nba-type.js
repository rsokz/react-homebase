const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = graphql;

const NBAType = new GraphQLObjectType({
  name: 'NBAType',
  fields: {
    dailygameschedule: {
      type: new GraphQLObjectType({
        name: 'dailygamesschedule',
        fields: {
          lastUpdatedOn: { type: GraphQLString }
        }
      })
    }
  }
});

module.exports = NBAType;
