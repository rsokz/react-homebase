import { GraphQLObjectType, GraphQLString } from "graphql";
import UserType from "./types/user-type";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      }
    }
  }
});

export default mutation;
