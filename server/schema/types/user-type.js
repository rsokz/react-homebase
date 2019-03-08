const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    settings: {
      type: new GraphQLObjectType({
        name: 'settings',
        fields: {
          backgroundImage: { type: GraphQLInt },
          websites: {
            type: GraphQLList(
              new GraphQLObjectType({
                name: 'website',
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
  }
});

module.exports = UserType;
