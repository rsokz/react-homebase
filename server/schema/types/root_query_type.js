const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const UserType = require('./user-type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  // GraphQL expects at least one field for every type
  fields: {
    currentUser: {
      type: UserType,
      resolve(_, __, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
