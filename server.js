const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/Items')

const app = express()

// Body Parser
app.use(bodyParser.json())

// Mongo config
const db = require('./config/keys').mongoURI

// Connect to mLab
mongoose.connect(db)
    .then( () => console.log('MongoDb Connected...'))
    .catch( err => console.log(err))

// Use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log("Server runnin on port: "+port))