import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const ResourceSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  comments: {
    type: String
  },
  votes: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
