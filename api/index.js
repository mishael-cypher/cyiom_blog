const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const dotenv = require('dotenv')

dotenv.config()


const app = express()

app.use()

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(console.log('Connected to Database'))
.catch(err => console.error(err.message))

app.listen('5000', () => console.log('listening on port 5000'))