import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'

import pagination from './plugins/pagination'
import { DEFAULT_STORY_COVER } from '../config'

const { ObjectId } = Schema.Types

const storySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, default: DEFAULT_STORY_COVER },
  author: { type: ObjectId, ref: 'User' },
  genre: { type: ObjectId, ref: 'Genre', required: true },
  parts: [{ type: ObjectId, ref: 'Part' }],
  stars: { type: Number, default: 0 },
  removed: { type: Boolean, default: false },
})

storySchema.plugin(pagination, {
  addPaginationStatus: true,
})

storySchema.plugin(timestamp)

export default mongoose.model('Story', storySchema)
