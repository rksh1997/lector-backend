import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'

import pagination from './plugins/pagination'

const { ObjectId } = Schema.Types

const storySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
  genre: { type: ObjectId, ref: 'Genre' },
  parts: [{ type: ObjectId, ref: 'Part' }],
  stars: { type: Number, default: 0 },
  removed: { type: Boolean, default: false },
})

storySchema.plugin(pagination, {
  addPaginationStatus: true,
})

storySchema.plugin(timestamp)

export default mongoose.model('Story', storySchema)
