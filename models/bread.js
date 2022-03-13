//Mongoose 
const req = require('express/lib/request')
const res = require('express/lib/response')
const mongoose = require('mongoose')
const {Schema} = mongoose

//Schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://images-gmi-pmc.edge-generalmills.com/da2abda1-fae1-4782-b65f-93868ca5bd40.jpg' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

//static


//Model & Export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread



