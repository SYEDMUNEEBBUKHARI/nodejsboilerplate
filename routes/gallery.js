const express = require('express')
const galleryRoute = express.Router()

galleryRoute.get('/', (req, res) => {
  res.status(200).send({ msg: 'gallery' })
})

module.exports = galleryRoute
