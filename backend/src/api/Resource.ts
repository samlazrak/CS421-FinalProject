import * as mongoose from "mongoose"

import { ResourceSchema } from "../models/Resource"
import resource from "schema/resource"

const Resource = mongoose.model("Resource", ResourceSchema)

const ResourceApi = {
  getResources: this.getResources,
  updateResource: this.updateResource
}

ResourceApi.getResources = async => {
  const resource = new Resource()
  return resource.find().select("id")
}

ResourceApi.updateResource = async args => {
  const resource = new Resource(args)

  resource.save((err, resource) => {
    if (err) {
      console.log(err)
      return err
    }
    return resource
  })
}

export default ResourceApi
