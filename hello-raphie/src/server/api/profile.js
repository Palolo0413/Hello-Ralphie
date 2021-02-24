const router = require('express').Router()
const {Doggy} = require('../db/models')
module.exports = router

//create a new doggy profile
router.post('/', async (req, res, next) => {
    try {
      const doggy = await Doggy.create({
        name: req.body.name,
        breed: req.body.breed,
        birthday: req.body.birthday,
      })
  
      if (doggy) {
        res.json(doggy)
      } else {
        res.status(401).send('cannot create a new doggo')
      }
    } catch (error) {
      next(error)
    }
  })
  

//get one specific doggo
router.get('/:id', async (req, res, next) => {
    try {
      const doggy = await Doggy.findById(req.params.id) 
      if (doggy) {
        res.json(doggy)
      } else {
        res.status(401).send('cannot get the doggy')
      }
    } catch (err) {
      next(err)
    }
  })
  