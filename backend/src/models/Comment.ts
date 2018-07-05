import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const CommentSchema = new Schema({
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: "Have some feedback? Leave a comment."
    },
    likes: {
        type: Number
    },
    parent_id: {
        type: Number
    },
    created_date: {
      type: Date,
      default: Date.now
    }
})
