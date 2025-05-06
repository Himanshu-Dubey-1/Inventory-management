const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "subcategory"
    },
    price: Number,
    quantity: Number,
    picture: String,
    supplierId: {
        type: Schema.Types.ObjectId,
        ref: "supplier"
    },
    createdAt: { type: Date, default: Date.now}
})

exports.item = mongoose.model('item', itemSchema)
