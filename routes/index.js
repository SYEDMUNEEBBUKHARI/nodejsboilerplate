const express = require('express')
const routes = express.Router()
const homeRoute = require('./homeRoute')
const galleryRoute = require('./gallery')
const signUp = require('./signup')

routes.use('/home', homeRoute)
routes.use('/gallery', galleryRoute)
routes.use('/signup', signUp)
module.exports = routes
