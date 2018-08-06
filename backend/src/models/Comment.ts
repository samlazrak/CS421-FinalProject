import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const CommentSchema = new Schema({
    author: {  type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number },
    resource: { type: String, required: true },
    created_date: { type: Date, default: Date.now
    }
})

const userComment = mongoose.model('Comment', CommentSchema)
module.exports = userComment