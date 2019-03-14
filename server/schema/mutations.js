const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType
} = graphql;
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
        const response = await MongoService.updateName(user.email, name);
        return response;
      }
    },
    updateSettings: {
      type: UserType,
      args: {
        settings: {
          type: new GraphQLInputObjectType({
            name: 'updatedSettings',
            fields: {
              backgroundImage: { type: GraphQLInt },
              websites: {
                type: GraphQLList(
                  new GraphQLInputObjectType({
                    name: 'newWebsite',
                    fields: {
                      url: { type: GraphQLString },
                      iconURL: { type: GraphQLString }
                    }
                  })
                )
              }
            }
          })
        }
      },
      resolve: async (_, { settings }, req) => {
        const { user } = req;
        const response = await MongoService.updateSettings(user.email, settings);
        return response;
      }
    }
  }
});

module.exports = mutation;
