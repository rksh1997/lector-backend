import mongoose, { Schema } from 'mongoose'

const genreSchema = new Schema({
  name: { type: String, required: true },
})

export default mongoose.model('Genre', genreSchema)
