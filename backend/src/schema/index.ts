import { makeExecutableSchema } from "graphql-tools"
import { merge } from "lodash"
import user from "./user"
import resource from "./resource"


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

const typeDefs = [rootTypeDefs, user.typeDefs, resource.typeDefs]
const resolvers = merge(rootResolvers, user.resolvers, resource.resolvers)

export default makeExecutableSchema({ typeDefs, resolvers })
