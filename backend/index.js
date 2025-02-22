const express = require("express")
const connectDB = require('./config/db')
const categoryapi = require('./routes/category')
const subCategory = require('./routes/subCategory')
const items = require('./routes/items')
const user = require('./routes/user')
const Register = require('./routes/register')
const cookieParser = require('cookie-parser')
const HandleLoggedUser = require('./middleware/auth')
const cors = require('cors')


connectDB()

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cookieParser())
server.use(cors({
    origin: "http://localhost:5173", // Allow React frontend
    credentials: true // Allow cookies to be sent
  }));

server.use('/', Register)
server.use('/',HandleLoggedUser, user)
server.use('/',HandleLoggedUser, categoryapi)
server.use('/',HandleLoggedUser, subCategory)
server.use('/',HandleLoggedUser ,items)



server.listen("5000" , (req, res) => {
    console.log("server is listening on port 5000...."); 
}) 