const express = require('express')
const routes = express.Router()
const homeRoute = require('./homeRoute')
const galleryRoute = require('./gallery')

routes.use('/home', homeRoute)
routes.use('/gallery', galleryRoute)

module.exports = routes
