const mongoose = require('mongoose')
const { DB_URL } = require('./config')
const Series = require('./models/Series')

mongoose.connect(DB_URL, { useMongoClient: true })

for (let i = 0; i < 12; i += 1) {
  Series.create({
    title: `عنوان مؤقت للقصة رقم ${i}`,
    description: `وضف مؤقت يمكن استبداله في اي وقت, هنا يضع المصمم هذا النص للدلالة على انه مؤقت وسيتمو وضف مؤقت يمكن استبداله في اي وقت, هنا يضع المصمم هذا النص للدلالة على انه مؤقت وسيتمو وضف مؤقت يمكن استبداله في اي وقت, هنا يضع المصمم هذا النص للدلالة على انه مؤقت وسيتمو وضف مؤقت يمكن استبداله في اي وقت, هنا يضع المصمم هذا النص للدلالة على انه مؤقت وسيتم`,
    author: '59ca88210c54581654ac6fff',
    stars: Math.floor(Math.random() * 100),
    picture: 'www.google.com/me.jsp',
  })
}
