const express = require('express')
const app = express()
const morgan = require('morgan')
const routes = require('./routes')
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3030

app.use(express.json()) //Used to parse JSON bodies
app.use(express.urlencoded()) //Parse URL-encoded bodies
app.use(morgan(':id :method :url :response-time'))
app.use('/api', routes)
console.log('welcome')
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
