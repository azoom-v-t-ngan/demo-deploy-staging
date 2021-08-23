const connection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
    timezone: 'Asia/Tokyo',
    typeCast: function (field, next) {
      if (field.type === 'JSON') {
        return (JSON.parse(field.string()))
      }
      return next()
    }
  }
  if (process.env.MODE === 'development') {
    connection.host = process.env.DB_HOST
    connection.port = process.env.DB_PORT
  } else {
    connection.socketPath = process.env.DB_SOCKETPATH
  }
  
  const knex = require('knex')({
    client: 'mysql',
    connection
  })
  
  module.exports = knex