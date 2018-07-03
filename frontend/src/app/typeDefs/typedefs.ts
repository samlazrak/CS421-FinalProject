export type Resource = {
  id: string;
  title: string;
  content: string;
  comments: string;
}

export type Query = {
  resources: Resource[];
  resource(id: string): Resource;
}

export type Mutation = {
  update(resource: Resource): Resource
}
