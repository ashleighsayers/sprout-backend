const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const GoodVibes = require('./../models/GoodVibes')
const path = require('path')

// GET- get all projects ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  GoodVibes.find().populate('user', '_id firstName lastName')
    .then(vibes => {
      if(vibes == null){
        return res.status(404).json({
          message: "No vibes found"
        })
      }
      res.json(vibes)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting vibes"
      })
    })  
})

// POST - create new haircut --------------------------------------
router.post('/', (req, res) => {
  // validate 
  if(Object.keys(req.body).length === 0){   
    return res.status(400).send({message: "vibes content can't be empty"})
  }

  console.log('req.body = ', req.body)

  const newGoodVibes = new GoodVibes(req.body)


  
    newGoodVibes.save()
    .then(vibe => {        
      // success!  
      // return 201 status with user object
      return res.status(201).json(vibe)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
        message: "Problem creating vibes",
        error: err
      })
    })
  })

// export
module.exports = router