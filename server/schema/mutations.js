const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./types/user-type');
const AuthService = require('../services/auth');
const MongoService = require('../services/mongo');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(_, __, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        name: { type: GraphQLString }
      },
      resolve(_, { email, password, name }, req) {
        return AuthService.signup({ email, password, name, req });
      }
    },
    updateSettings: {
      type: UserType,
      args: {
        email: { type: GraphQLString }
      },
      resolve: async (_, { email }, req) => {
        const { user } = req;
        console.log('userYo', user);
        const response = await MongoService.updateSettings(user.email);
        console.log('response,', response);
        return response;
      }
    }
  }
});

module.exports = mutation;
