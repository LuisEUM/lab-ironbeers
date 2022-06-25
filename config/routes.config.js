const express = require('express')
const router = express.Router()

const misc = require('../controllers/misc.controllers')
const beers = require('../controllers/beers.controllers')

router.get('/', misc.home)
router.get('/beers', beers.list)
router.get('/beers/:id', beers.detail)
router.get('/random-beer', beers.random)

module.exports = router;