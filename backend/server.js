require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/users', usersRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
       // listen for requests, process.env.PORT is a way of referencing our port number which is sensitive information when we push this to the cloud
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening port', process.env.PORT)
        }) 
    })
    .catch((error) => {
        console.log(error)
    })