import { makeExecutableSchema } from "graphql-tools"
import { merge } from "lodash"

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

const typeDefs = [rootTypeDefs]
const resolvers = merge(rootResolvers)

export default makeExecutableSchema({ typeDefs, resolvers })
