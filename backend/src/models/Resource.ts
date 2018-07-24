import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const ResourceSchema = new Schema({
  id: {
<<<<<<< HEAD
    type: String
=======
    type: Number
>>>>>>> sql
  },
  title: {
    type: String
  },
<<<<<<< HEAD
=======
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
>>>>>>> sql
  content: {
    type: String
  },
  comments: {
<<<<<<< HEAD
    type: String
=======
    type: Schema.ObjectId,
    ref: 'Comment'
>>>>>>> sql
  },
  votes: {
    type: String
  },
<<<<<<< HEAD
=======
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
>>>>>>> sql
  created_date: {
    type: Date,
    default: Date.now
  }
})
