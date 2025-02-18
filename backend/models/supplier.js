const mongoose = require('mongoose')


const supplierSchema = new mongoose.Schema({
    Name: String,
    Contact: String
})

const supplier = mongoose.model('supplier', supplierSchema)

module.exports = supplier