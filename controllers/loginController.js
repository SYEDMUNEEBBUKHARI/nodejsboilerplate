/* eslint-disable no-unused-vars */
const db = require('../models')

//For Register Page
const registerData = async (data) => {
  const result = await db.Users.create({
    ...data,
  })
  return result
}
// For View
const loginView = async (req, res) => {
  try {
    const data = await db.Users.findAll({})
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  return true
}
module.exports = {
  registerData,
  loginView,
}
