const jwt = require('jsonwebtoken')


const setuser = ( user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, process.env.PRIVATE_KEY)
}

const getuser = (token) => {
    if(!token) return null
    try {
        return jwt.verify(token, process.env.PRIVATE_KEY)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {setuser, getuser}