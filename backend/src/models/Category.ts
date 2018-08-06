import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const CategorySchema = new Schema({
    // id: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    resources: { type: Schema.ObjectId, ref: 'Resource' }
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category