import mongoose, {   Schema } from 'mongoose'

const itemSchema: Schema = new Schema({
  description: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: true }
})
export const itemModel = mongoose.model('Item', itemSchema);

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
})
export const userModel = mongoose.model('User', userSchema)

module.exports = { itemModel, userModel }

