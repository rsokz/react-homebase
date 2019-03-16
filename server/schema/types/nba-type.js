const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql;

const NBAType = new GraphQLObjectType({
  name: 'NBAType',
  fields: {
    games: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: 'game',
          fields: {
            period: {
              type: new GraphQLObjectType({
                name: 'period',
                fields: {
                  current: { type: GraphQLInt }
                }
              })
            }
          }
        })
      )
    }
  }
});

module.exports = NBAType;
