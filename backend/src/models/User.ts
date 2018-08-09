import * as mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String, required: true },
  created_date: { type: Date, default: Date.now }
})

const User = mongoose.model('User', UserSchema)
module.exports = User
