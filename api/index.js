const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const dotenv = require('dotenv')

// Routes
authRoute = require('./routes/auth')
userRoute = require('./routes/users')
postRoute = require('./routes/posts')
categoryRoute = require('./routes/categories')

dotenv.config()


const app = express()

app.use(express.json())
app.use('api/auth', authRoute)
app.use('api/users', userRoute)
app.use('api/posts', postRoute)
app.use('api/categories', categoryRoute)


mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(console.log('Connected to Database'))
.catch(err => console.error(err.message))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filenmae: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json('file has been uploaded')
})


app.listen('5000', () => console.log('listening on port 5000'))