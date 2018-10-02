const fs = require('fs')

const consoleLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  const message = `Time: ${now} ${req.method} ${req.url}`
  console.log(message)
  next()
}

const fileLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  const message = `Time: ${now} ${req.method} ${req.url}\n`
  fs.appendFile('server.log', `${message}`, (err) => {
    if (err) console.log('Error al usar el fichero: ', err)
  })
  next()
}

module.exports = {
  consoleLogMiddleware,
  fileLogMiddleware
}
