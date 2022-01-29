const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
}, {timestamp: true})


module.exports = mongoose.model('Category', CategorySchema)