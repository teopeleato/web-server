const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hola Teo')
})
app.listen(3000)
