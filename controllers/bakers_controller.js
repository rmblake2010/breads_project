// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')



//Index
breads.get('/', async (req, res) => {
    const foundBakers = await Baker.find().lean()
    const foundBreads = await Bread.find().limit(6).lean()
            res.render('index', {
                breads: foundBreads,
                bakers: foundBakers,
                title: 'Index Page'
    })
  })

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 4 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


//Seed Route
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

//Delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
    .then(deletedBaker => {
        res.status(303).redirect('/breads')
    })
})


// export
module.exports = baker                    