const graphql = require('graphql');

const { GraphQLObjectType, GraphQLFloat } = graphql;
const UserType = require('./user-type');
const WeatherType = require('./weather-type');
const WeatherService = require('../../services/darksky');
const ProductType = require('./product-type');
const ProductHuntService = require('../../services/productHunt');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  // GraphQL expects at least one field for every type
  fields: {
    currentUser: {
      type: UserType,
      resolve(_, __, req) {
        return req.user;
      }
    },
    weather: {
      type: WeatherType,
      args: {
        lat: { type: GraphQLFloat },
        long: { type: GraphQLFloat }
      },
      resolve(_, { lat, long }, ___) {
        return WeatherService.getWeather(lat, long);
      }
    },
    products: {
      type: ProductType,
      resolve(_, __, ___) {
        return ProductHuntService.getPosts();
      }
    }
  }
});

module.exports = RootQueryType;
