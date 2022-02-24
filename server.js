// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Welcome to an Awesome App about Breads!</h1>')
})

// Breads
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

//wild-card
app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})