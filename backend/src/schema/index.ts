import { makeExecutableSchema } from "graphql-tools"
import { find, merge } from "lodash"
import user from "./user"
import resource from "./resource"
// import aupost from "./schema-test"
// import category from "./category"


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
  // aupost.typeDefs] 
// category.typeDefs]
const resolvers = merge(rootResolvers, user.resolvers, resource.resolvers)
  // , aupost.resolvers) 
  // category.resolvers)

export default makeExecutableSchema({ typeDefs, resolvers })
