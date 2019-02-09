import { GraphQLSchema } from "graphql";
import RootQueryType from "./types/root_query_type";

const Schema = new GraphQLSchema({
  query: RootQueryType
});

export default Schema;
