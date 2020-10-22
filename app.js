const path = require('path')
const express = require('express')

const app = express()

const homeRoute = require('./routes/home')

app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoute)

app.listen(3000)