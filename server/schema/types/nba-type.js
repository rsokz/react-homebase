const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean } = graphql;

const Game = new GraphQLObjectType({
  name: 'game',
  fields: {
    gameId: { type: GraphQLString },
    isGameActivated: { type: GraphQLBoolean },
    statusNum: { type: GraphQLInt },
    startTimeEastern: { type: GraphQLString },
    clock: { type: GraphQLString },
    period: {
      type: new GraphQLObjectType({
        name: 'period',
        fields: {
          current: { type: GraphQLInt },
          isHalftime: { type: GraphQLBoolean },
          isEndOfPeriod: { type: GraphQLBoolean }
        }
      })
    },
    vTeam: {
      type: new GraphQLObjectType({
        name: 'vTeam',
        fields: {
          teamId: { type: GraphQLString },
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
          teamId: { type: GraphQLString },
          triCode: { type: GraphQLString },
          win: { type: GraphQLString },
          loss: { type: GraphQLString },
          score: { type: GraphQLString }
        }
      })
    }
  }
});

const NBAType = new GraphQLObjectType({
  name: 'NBAType',
  fields: {
    games: { type: GraphQLList(Game) }
  }
});

module.exports = NBAType;
