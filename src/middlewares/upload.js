import multer from 'multer'
import { join } from 'path'

const storage = multer.diskStorage({
  destination: join(__dirname, '../../uploads'),
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.')[1]
    if (ext) {
      const name = `${Date.now()}.${ext}`
      req.imageUrl = name
      return cb(null, name)
    }
    return cb(new Error('Invalid image.'))
  },
})

function fileFilter(req, file, cb) {
  const type = file.mimetype.split('/')[1]
  if (!/jpeg|png|jpg/.test(type)) {
    return cb(new Error('Invalid image type, we only accept jpg, jpeg, png'))
  }
  return cb(null, true)
}

export default multer({ storage, fileFilter })
