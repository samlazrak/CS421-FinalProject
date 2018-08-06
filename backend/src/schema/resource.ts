import { find, filter } from 'lodash'
const Resource = require('../models/Resource')

const typeDefs = `
  type Resource {
    id: ID!
    title: String!
    content: String!
    comments: [Comment]
    author: User!
  }

  extend type Query {
    resources: [Resource]
    resource(id: ID!): Resource
  }
  
  extend type Mutation {
    newResource (
      title: String!, content: String!, author: ID!
    ): Resource

    update (
      id: ID!, title: String!, content: String!, comments: String
    ): Resource
  }
  `

/* const resolvers = {
  Query: {
    resources: () => api.ResourceApi.getResources
  },
  Mutation: {
    updateResource: api.ResourceApi.updateResource
  }
} */


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
        comments: args.comments,
        author: args.author
      })
      return resource.save()
    }
  }
}

export default { typeDefs, resolvers }






/*

Unused/Testing/Reference Code:

update: (root, { id, title, content, comments, votes }) => {
  const i = resources.findIndex(e => e.id === id);
    if (i >= 0) {
      const resource = resources[i];
      resource.id = id
      resource.title = title;
      resource.content = content;
      resource.comments = comments;
      resource.votes = votes;
      return resource;
    }
    return null;
    
    resources: (_) => {
  return resources;
},

user: (_, { id }) => find(users, { id: userId })
},
User: {
  resources(userId) {
    return filter(resources, { userId: userId.resources.id })
  }
  
  User: {
      resources: (_, args) => { 
      return User.findById()
    },

  */