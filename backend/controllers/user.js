
const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const {setuser} = require('../utils/auth')

const signup = asyncHandler(async (req, res ) => {
    const {username, email, password} = req.body;
    const user = new User({username: username, email: email, password: password});
    console.log(user)

    try {
        const person = await User.create(user);
        console.log(person)
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(401).send("signup wasn't successful")
    }

})

const login = asyncHandler(async (req, res ) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
          return res.json({ success: true, redirectUrl: "/signup" });

        }else if(password !== user.password){

            return res.json({ passwordNotMatch: true });

        }else{

            const token = setuser( user) 
            res.cookie('uid', token)
            return res.status(201).send("User logged in successfully")
        }

        
    } catch (error) {
        return res.status(401).send("Invalid credentials");
    }
})


const logout = asyncHandler(async(req, res)=> {
    res.clearCookie('uid').send("logged out successfully")
})


const getAllUsers = asyncHandler(async (req, res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const updateUser = asyncHandler(async(req, res)=> {
    try {
        const userid = req.params.userid
        const user = await User.findOneAndUpdate({_id:userid}, req.body , {new: true})
        if (!user){
            res.status(404).send("User not found")
        }
        res.send("details updated")
    } catch (error) {
        
    }
})

const deleteUser = asyncHandler(async(req,res)=> {
    try {
        const userid = req.params.userid
        const user = await User.findOneAndDelete({_id:userid})
        if (!user){
            res.status(404).send("User not found")
        }
        res.send("user deleted")
    } catch (error) {
        
    }
})

module.exports = {login, signup, logout, getAllUsers, updateUser, deleteUser};