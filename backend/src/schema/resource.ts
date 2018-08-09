const Resource = require('../models/Resource')

const typeDefs = `
  type Resource {
    id: ID!
    title: String!
    content: String!
    link: String
    comments: [Comment]
    author: User!
  }

  extend type Query {
    resources: [Resource]
    resource(id: ID!): Resource
  }
  
  extend type Mutation {
    newResource (
      title: String!, content: String!, author: ID!, link: String
    ): Resource

    update (
      id: ID!, title: String!, content: String!, comments: String
    ): Resource
  }
  `

const resolvers = {
  Query: {
    resources: (_) => {
      return Resource.find({})
    },
    resource: (_, args) => {
      return Resource.findById(args.id)
    },
  },
  User: {
    resources: (_) => {
      return Resource.find({ author: _.id })
    }
  },
  Comment: {
    resource: (_) => {
      return Resource.findById( _.resource )
    }
  },
  Mutation: { 
    newResource(_, args){ 
      let resource = new Resource({
        title: args.title,
        content: args.content,
        author: args.author,
        link: args.link
      })
      return resource.save()
    }
  }
}

export default { typeDefs, resolvers }