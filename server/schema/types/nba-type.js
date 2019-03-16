const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean } = graphql;

const NBAType = new GraphQLObjectType({
  name: 'NBAType',
  fields: {
    games: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: 'game',
          fields: {
            isGameActivated: { type: GraphQLBoolean },
            statusNum: { type: GraphQLInt },
            period: {
              type: new GraphQLObjectType({
                name: 'period',
                fields: {
                  current: { type: GraphQLInt },
                  isHalftime: { type: GraphQLBoolean }
                }
              })
            },
            vTeam: {
              type: new GraphQLObjectType({
                name: 'vTeam',
                fields: {
                  triCode: { type: GraphQLString },
                  win: { type: GraphQLString },
                  loss: { type: GraphQLString },
                  score: { type: GraphQLString }
                }
              })
            },
            hTeam: {
              type: new GraphQLObjectType({
                name: 'hTeam',
                fields: {
                  triCode: { type: GraphQLString },
                  win: { type: GraphQLString },
                  loss: { type: GraphQLString },
                  score: { type: GraphQLString }
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
