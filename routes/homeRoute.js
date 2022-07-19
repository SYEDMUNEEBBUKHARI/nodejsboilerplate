const express = require('express')
const homeRoute = express.Router()

homeRoute.get('/', (req, res) => {
  res.status(200).send({ msg: 'home' })
})

module.exports = homeRoute
