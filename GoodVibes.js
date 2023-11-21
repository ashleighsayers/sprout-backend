const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')

// schema
const GoodVibesSchema = new mongoose.Schema({
  vibes: {
    type: String    
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  description: {
    type: String
  }
  
}, { timestamps: true })


// model
const GoodVibesModel = mongoose.model('GoodVibes', GoodVibesSchema, 'goodVibes')

// export
module.exports = GoodVibesModel