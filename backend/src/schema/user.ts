import users from "../mocks/users"

const typeDefs = `
  type User {
    id: Int!
    email: String!
    name: String!
    password: String!
  }
  
  extend type Query {
    users: [User]
  }
`

const resolvers = {
  Query: {
    users: () => users
  }
}

export default { typeDefs, resolvers }
