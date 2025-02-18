const express = require('express');
const router = express.Router();
const {login, signup, logout, getAllUsers, updateUser, deleteUser} = require('../controllers/user');

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);

router.get('/users', getAllUsers);

router.patch('/users/:userid', updateUser )

router.delete('/users/:userid', deleteUser )

module.exports = router;