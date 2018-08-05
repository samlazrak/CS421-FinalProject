import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const ResourceSchema = new Schema({
  // id: { type: Schema.Types.ObjectId },
  title: { type: String },
  // author: { type: Schema.Types.ObjectId, ref: 'User' },
  author: { type: String },
  img: { type: String },
  url: { type: String },
  content: { type: String },
  comments: { type: Schema.Types.ObjectId, ref: 'Comment' },
  votes: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  created_date: { type: Date, default: Date.now }
})

const Resource = mongoose.model('Resource', ResourceSchema)
module.exports = Resource
