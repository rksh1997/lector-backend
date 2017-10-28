import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'

const { ObjectId } = Schema.Types

const partSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  story: { type: ObjectId, ref: 'Story' },
  removed: { type: Boolean, default: false },
})

partSchema.plugin(timestamp)

export default mongoose.model('Part', partSchema)
