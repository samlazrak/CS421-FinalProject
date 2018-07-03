import api from "../api/index"
import resources from "../mocks/resources"

const typeDefs = `
  type Resource {
    id: String!
    title: String!
    content: String!
    comments: String
  }
  extend type Query {
    resources: [Resource]
    resource(id: String!): Resource
  }

  extend type Mutation {
    update(id: String!, title: String!, content: String!, comments: String): Resource
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

/* For testing */

const resolvers = {
  Query: {
    resources: (root) => {
      return resources;
    },
    resource: (root, { id }) => {
      return resources.find(resource => resource.id === id);
    }
  },
  Mutation: { 
    update: (root, { id, title, content, comments }) => {
      const i = resources.findIndex(e => e.id === id);
      if (i >= 0) {
        const resource = resources[i];
        resource.id = id
        resource.title = title;
        resource.content = content;
        resource.comments = comments;
        return resource;
      }
      return null;
    }
  }
};

export default { typeDefs, resolvers }
