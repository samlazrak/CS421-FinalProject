import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const UserSchema = new Schema({
  id: {
    type: Number,
    required: "Enter an id"
  },
  email: {
    type: String,
    required: "Enter an email"
  },
  name: {
    type: String,
    required: "Enter a name"
  },
  password: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
