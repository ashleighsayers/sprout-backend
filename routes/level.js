const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Level = require('./../models/Level')

// GET - get levels -------------------------------------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Level.find()
    .then(levels => {
      res.send(levels)
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(500)
    }) 
})

router.put('/:id', Utils.authenticateToken, (req, res) => {
  // validate request
  if(!req.body) return res.status(400).send("Task content can't be empty")

  // if avatar image exists, upload!
  if(req.files && req.files.levels){
    // upload avater image then update user
    let uploadPath = path.join(__dirname, '..', 'public', 'images')
    Utils.uploadFile(req.files.avatar, uploadPath, (uniqueFilename) => {
      avatarFilename = uniqueFilename
      // update user with all fields including avatar
      updateLevel({
        level: req.body.level,      
      })
    })
  }

function updateLevel(update){    
  User.findByIdAndUpdate(req.params.id, update, {new: true})
  .then(levels => res.json(levels))
  .catch(err => {
    res.status(500).json({
      message: 'Problem updating user',
      error: err
    })
  }) 
}
})


module.exports = router