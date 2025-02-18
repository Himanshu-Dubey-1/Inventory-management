const mongoose = require('mongoose')
const {Schema} = mongoose;


const categorySchema = new Schema({
    Name: String,
    Description: String,
})

exports.category = mongoose.model('category', categorySchema)