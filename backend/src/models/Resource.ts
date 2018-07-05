import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const ResourceSchema = new Schema({
  id: {
    type: Number
  },
  title: {
    type: String
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User'
},
img: {
  type: String
},
url: {
  type: String
},
  content: {
    type: String
  },
  comments: {
    type: Schema.ObjectId,
    ref: 'Comment'
  },
  votes: {
    type: String
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
