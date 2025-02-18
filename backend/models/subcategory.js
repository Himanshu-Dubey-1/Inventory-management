const mongoose = require('mongoose')
const {Schema} = mongoose;


const subcategorySchema = new Schema({
    Name: String,
    Description: String,
    Category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    }
})

exports.subcategory = mongoose.model('subcategory', subcategorySchema)