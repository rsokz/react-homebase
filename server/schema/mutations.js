const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
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
    updateName: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (_, { name }, req) => {
        const { user } = req;
        console.log('userYo', user);
        const response = await MongoService.updateName(user.email, name);
        console.log('response,', response);
        return response;
      }
    }
  }
});

module.exports = mutation;
