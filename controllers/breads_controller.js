const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

// INDEX
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: Bread,
      title: 'My Index Page!'
    }
  )  
  //res.send(Bread)
})

// SHOW
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('notFound')
  }
})



module.exports = breads