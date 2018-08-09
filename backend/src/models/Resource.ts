import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const ResourceSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  img: { type: String },
  url: { type: String },
  content: { type: String, required: true },
  comments: { type: String },
  link: { type: String },
  created_date: { type: Date, default: Date.now }
})

const Resource = mongoose.model('Resource', ResourceSchema)
module.exports = Resource