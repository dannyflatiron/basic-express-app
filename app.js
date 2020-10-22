const { response } = require('express')
const express = require('express')

const app = express()

// app.use((request, response, next) => {
//   console.log("You are in the first middleare")
//   next()
// })

// app.use((request, response, next) => {
//   console.log("You are in the second middleare")
//   response.send('<h1>Users Page</h1>')
// })

app.use('/users', (request, response, next) => {
  console.log("You are in middleare")
  response.send('<p>The Middleware that handles just /users</p>')
})

app.use('/', (request, response, next) => {
  console.log("You are in the users middleare")
  response.send('<p>The Middleware that handles just /</p>')
})

app.listen(3000)