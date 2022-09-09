const authRouter = require('./auth')
const siteRouter = require('./site')
const postRouter = require('./post')

function route(app) {
  app.use('/auth', authRouter);
  app.use('/posts', postRouter)
  app.use('/',siteRouter)
}

module.exports = route;