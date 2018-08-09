const userComment = require('../models/Comment')

const typeDefs =`
  type Comment {
    id: ID!
    resource: Resource!
    author: User!
    description: String!
    likes: Int
  }

  extend type Query {
      comments: [Comment]
  }

  extend type Mutation {
      newComment (
          resource: ID!, author: ID!, description: String!, likes: Int
      ): Comment

      editComment (
        description: String!
      ): Comment
  }
`

const resolvers = {
    Query: {
        comments: (_) => {
            return userComment.find({})
        }
    },
    User: {
        comments: (_) => {
            return userComment.find({ author: _.id })
        }
    },
    Resource: {
        comments: (_) => {
            return userComment.find({ resource: _.id })
        }
    },
    Mutation: {
        newComment(_, args){
            let comment = new userComment({
                resource: args.resource,
                author: args.author,
                description: args.description,
                likes: args.likes
            })
            return comment.save()
        }
    }
}

export default { typeDefs, resolvers }