import { makeExecutableSchema } from "graphql-tools"
import { merge } from "lodash"
import user from "./user"
import resource from "./resource"
import comment from "./comment"


const rootTypeDefs = `
  type Query {
    name: String
  }
  type Mutation {
    name: String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`

const rootResolvers = {
  Query: {
    name: () => "DevResources"
  },
  Mutation: {
    name: () => "DevResources"
  }
}

const typeDefs = [rootTypeDefs, user.typeDefs, resource.typeDefs, comment.typeDefs]
const resolvers = merge(rootResolvers, user.resolvers, resource.resolvers, comment.resolvers)

export default makeExecutableSchema({ typeDefs, resolvers })
