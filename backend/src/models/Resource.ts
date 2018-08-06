import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const ResourceSchema = new Schema({
  // id: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  // author: { type: Schema.Types.ObjectId, ref: 'User' },
  author: { type: String, required: true },
  img: { type: String },
  url: { type: String },
  content: { type: String, required: true },
  comments: { type: String },
  votes: { type: Number },
  category: { type: String, required: true },
  created_date: { type: Date, default: Date.now }
})

const Resource = mongoose.model('Resource', ResourceSchema)
module.exports = Resource