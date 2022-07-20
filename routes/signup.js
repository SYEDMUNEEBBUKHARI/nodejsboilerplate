const express = require('express')
const signup = express.Router()

signup.get('/', (req, res) => {
  res.status(200).send({ msg: 'signup' })
})

module.exports = signup
