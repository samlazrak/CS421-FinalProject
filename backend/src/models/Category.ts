var mongoose = require('mongoose')
const Schema = mongoose.Schema

export const CategorySchema = new Schema ({
    title: {
        type: String
    },
    id: {
        type: Number
    },
    description: {
        type: String
    },
    resources: {
        type: Schema.ObjectId,
        ref: 'Resource'
    }
})