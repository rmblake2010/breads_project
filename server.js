// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const timeout = require('connect-timeout')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}
  .catch(error => console.log(error)))
// CREATING EXPRESS APP
const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an awesome app about breads!')
})

// Breads
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)
//Bakers
const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)


//wild-card
app.get('*', (req, res) => {
    res.render('notFound')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})