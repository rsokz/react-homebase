const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    discussion_url: { type: GraphQLString },
    name: { type: GraphQLString },
    tagline: { type: GraphQLString },
    thumbnail: {
      type: new GraphQLObjectType({
        name: 'thumbnail',
        fields: {
          image_url: { type: GraphQLString }
        }
      })
    },
    topics: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: 'topic',
          fields: {
            name: { type: GraphQLString }
          }
        })
      )
    },
    votes_count: { type: GraphQLInt }
  }
});

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: {
    posts: { type: GraphQLList(Post) }
  }
});

module.exports = ProductType;
