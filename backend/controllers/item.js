const asyncHandler = require('express-async-handler');
const model = require("../models/item")
const Item = model.item



const getItems = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message) 
    }
})

const getItemById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.itemid
        const itembyid = await Item.findById(id)
        res.send(itembyid)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const getItemByCategory = asyncHandler(async (req, res) => {
    try {
        const category = req.params.category
        const items = await Item.find({Category: category})
        res.send(items)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const getItemBySubCategory = asyncHandler(async (req, res) => {
    try {
        const category = req.params.category
        const subcategory = req.params.subCategory
        const items = await Item.find({Category: category, Subcategory: subcategory})
        res.send(items)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const postItem = asyncHandler(async (req, res) => {  


    const {name, price, quantity, picture, description, category} = req.body
    // const photobase64 = req.file && req.file.buffer.toString('base64')
    // console.log(photobase64)

    const item = new Item({
        name: name,
        category: category,
        price: price,
        quantity: quantity,
        picture: picture,
        description: description,
    })
    try {
        await Item.create(item)
        res.send(item)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const updateItem = asyncHandler(async (req, res) => {
    try {
        const id = req.params.itemid
        const item = await Item.findOneAndUpdate({_id:id}, req.body , {new: true})
        res.send(item)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const searchItem = asyncHandler(async (req, res) => {
    try {
        const name = req.query.name
        const items = await Item.find()
        const allitem = [...items]
        const filteredItems = allitem.filter(item => item.Name.toLowerCase().startsWith(name.toLowerCase()))
        res.send(filteredItems)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const deleteItem = asyncHandler(async (req, res) => {
    try {
        const id = req.params.itemid
        const item = await Item.findByIdAndDelete(id)
        res.send(item)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})


module.exports = { getItems, getItemById, getItemByCategory, getItemBySubCategory, postItem, updateItem, searchItem, deleteItem }

