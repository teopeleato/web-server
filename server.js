const express = require('express')
const app = express()
const path = require('path')
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

const year = new Date().getFullYear()

// Template engine: handebars, con hbs de wrapper
const hbs = require('hbs')
// Parciales para separar footer y header
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs') // clave valor

app.use(consoleLogMiddleware)
app.use(fileLogMiddleware)

// Midleware de Express para contenido estático
// Si existe esa ruta, la carga, si no, pasa a lo siguiente del código
const staticRoute = path.join(__dirname, 'public')
app.use(express.static(staticRoute))

// Helpers
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
// con paso de parámetro:
hbs.registerHelper('toUpperCase', text => text.toUpperCase())

app.get('/', (req, res) => {
  res.send('Hola Teo!!!')
})
app.get('/contactar', (req, res) => {
  // res.send({ Nombre: 'Teo', correo: 'teo@t.com' })
  res.render('contactar.hbs', {
    pageTitle: 'Contactar'
  })
})
app.get('/inicio', (req, res) => {
  res.render('inicio', {
    pageTitle: 'Inicio'
  })
})
app.get('/noticias', (req, res) => {
  res.render('noticias', {
    pageTitle: 'Noticias'
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
