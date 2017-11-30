import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'

const { ObjectId } = Schema.Types

const commentSchema = new Schema({
  author: { type: ObjectId, ref: 'User', required: true },
  part: { type: ObjectId, ref: 'Part', required: true },
  content: { type: String, requierd: true },
  totalLikes: { type: Number, default: 0 },
})

commentSchema.plugin(timestamp)

export default mongoose.model('Comment', commentSchema)
