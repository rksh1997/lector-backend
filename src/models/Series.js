import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const seriesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
  category: { type: String },
  stars: { type: Number, default: 0 },
  parts: [{ type: ObjectId }], 
})

export default mongoose.model('Series'. seriesSchema)
