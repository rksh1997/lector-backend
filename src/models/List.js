import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const listSchema = new Schema({
  name: { type: String, required: true },
  user: { type: ObjectId, ref: 'User' },
  stories: [{ type: ObjectId, ref: 'Story' }],
  isDefault: { type: Boolean, default: true },
})

export default mongoose.model('List', listSchema)
