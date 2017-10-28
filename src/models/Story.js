import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'

import pagination from './plugins/pagination'

const { ObjectId } = Schema.Types

const storySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
  category: { type: String },
  stars: { type: Number, default: 0 },
  parts: [{ type: ObjectId }],
})

storySchema.plugin(pagination, {
  addPaginationStatus: true,
})

storySchema.plugin(timestamp)

export default mongoose.model('Series', storySchema)
