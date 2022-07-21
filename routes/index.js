const express = require('express')
const passport = require('passport')
const routes = express.Router()
const homeRoute = require('./homeRoute')
const galleryRoute = require('./gallery')
const signUp = require('./signup')

routes.use(
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/home',
  }),
  // eslint-disable-next-line no-unused-vars
  function (req, res) {}
)
routes.use('/home', homeRoute)
routes.use('/gallery', galleryRoute)
routes.use('/signup', signUp)
module.exports = routes
