const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = graphql;

const WeatherType = new GraphQLObjectType({
  name: 'WeatherType',
  fields: {
    time: { type: GraphQLInt },
    summary: { type: GraphQLString },
    icon: { type: GraphQLString },
    temperature: { type: GraphQLFloat }
  }
});

module.exports = WeatherType;
