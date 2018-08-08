import {find, filter} from "lodash"
const User = require('../models/User')

const typeDefs = `
  type User {
    id: ID!
    email: String!
    userName: String!
    firstName: String
    lastName: String
    password: String!
    resources: [Resource]
    comments: [Comment]
  }
  
  extend type Query {
    users: [User]
    user(id: ID!): User
    userNim(userName: String!): User
  }

  extend type Mutation {
    createUser (
      userName: String!, email: String!, firstName: String, lastName: String, password: String!
    ): User
  }
`




const resolvers = {
  Query: {
    users: (_) => {
      return User.find({})
    },
    user: (_, args) => {
      return User.findById(args.id)
    },
    userNim: (_, args) => {
      return User.findOne(args)
    }
  },
  User: {
    resources: (_) => { 
      return User.findById( _.author )
    }
  },
  Resource: {
    author: (_) => {
      return User.findById( _.author )
    },
  },
  Comment: {
    author: (_) => {
      return User.findById( _.author )
    }
  },
  Mutation: {
    createUser(_, args){ 
      let user = new User({
        email: args.email,
        userName: args.userName,
        firstName: args.firstName,
        lastName: args.lastName,
        password: args.password
    })
    return user.save()
  }
}
}

export default { typeDefs, resolvers }





/* 
Unused/Testing/Reference Code:

user: (_, { id }) => {
  return users.find(user => user.id === id)
}

users: (_) => {
  return users
},

user:(_, { id }) => {
  return find(users, { id })
},

*/