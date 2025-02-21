const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new mongoose.Schema({
    name: String,
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
    image: String,
    supplierId: {
        type: Schema.Types.ObjectId,
        ref: "supplier"
    },
    createdAt: { type: Date, default: Date.now}
})

exports.item = mongoose.model('item', itemSchema)
