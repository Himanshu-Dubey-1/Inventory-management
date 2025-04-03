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
const dotenv = require('dotenv');
const path = require('path')

dotenv.config()
connectDB()

const server = express()

const _dirname = path.resolve()

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cookieParser())
server.use(cors({
    origin: process.env.CLIENT_URL, 
    credentials: true 
  }));

server.use('/api', Register)
server.use('/api',HandleLoggedUser, user)
server.use('/api',HandleLoggedUser, categoryapi)
server.use('/api',HandleLoggedUser, subCategory)
server.use('/api',HandleLoggedUser ,items)


server.use(express.static(path.join(_dirname, '/frontend/dist'))) 
server.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
})


server.listen(process.env.PORT , (req, res) => {
    console.log(`server is listening on port ${process.env.PORT}` ); 
}) 