const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new mongoose.Schema({
    Name: String,
    CategoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    SubCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "subcategory"
    },
    Price: Number,
    Quantity: Number,
    SupplierId: {
        type: Schema.Types.ObjectId,
        ref: "supplier"
    },
    CreatedAt: { type: Date, default: Date.now}
})

exports.item = mongoose.model('item', itemSchema)
