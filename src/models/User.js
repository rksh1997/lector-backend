import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  avatar: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
})

userSchema.plugin(timestamps)

// before saving, encrypt the password
// if it's new or updated
userSchema.pre('save', async (done) => {
  if (this.isNew || this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
  }
  done()
})

export default mongoose.model('User', userSchema)
