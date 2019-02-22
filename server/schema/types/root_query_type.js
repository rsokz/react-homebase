const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserTpe = require('./user-type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  // GraphQL expects at least one field for every type
  fields: {
    currentUser: {
      type: UserTpe,
      resolve(_, __, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
