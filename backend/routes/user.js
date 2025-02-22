const express = require('express');
const router = express.Router();
const { getAllUsers, updateUser, deleteUser} = require('../controllers/user');



router.get('/users', getAllUsers);

router.patch('/users/:userid', updateUser )

router.delete('/users/:userid', deleteUser )

module.exports = router;