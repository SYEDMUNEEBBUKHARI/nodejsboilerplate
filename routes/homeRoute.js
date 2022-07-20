const express = require('express')
const homeRoute = express.Router()
const { loginView, registerData } = require('../controllers/loginController')
homeRoute.get('/', async (req, res) => {
  const data = await loginView()
  res.status(200).send({ msg: data })
})

homeRoute.get('/insertData', async (req, res) => {
  const { data } = req.body
  const response = await registerData(data)
  res.send({ response })
})
module.exports = homeRoute
