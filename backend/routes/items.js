const express = require('express')
const router = express.Router()
const {getItemByCategory, getItemById, getItemBySubCategory, getItems, postItem, updateItem, searchItem, deleteItem} = require('../controllers/item')

const multer = require('multer')

// const storage = multer.memoryStorage();

// const upload = multer({storage})


// Create , Get , Update Api for Items

router.get("/items/query", searchItem)

router.get("/items", getItems)

router.get("/:category/items", getItemByCategory)

router.get("/:category/:subCategory/items", getItemBySubCategory)

router.get("/:category/:subCategory/items/:itemid", getItemById)

router.post("/item", postItem)

router.patch('/:itemid' , updateItem)

router.delete('/items/:itemid', deleteItem)



module.exports = router