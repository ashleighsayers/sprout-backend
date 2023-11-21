const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')
require('mongoose-type-email')

// schema
const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String    
  },
  level: {
    type: Number,
    default: 1,
    required: true    
  },
  tasks: {
    type: Array,
  }
}, { timestamps: true })


// model
const levelModel = mongoose.model('Level', levelSchema, 'levels')

// export
module.exports = levelModel




