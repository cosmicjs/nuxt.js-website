let env = 'development'
if (process)
  env = process.env.NODE_ENV
const config = require('./' + env)
module.exports = config