const express = require('express');
const router = express.Router();
const {
    getListOfAllUsers,
    getUserById,
    createAdminUser,
    loginUser,
    registerNewUser,
    getTotalAmountOfAllUsers,
    deleteUserById,
} = require('../controllers/UsersController');

//TODO
//Integrate sendgrid email service

//Get list of all users
router.get('/', getListOfAllUsers);

//Get user by id
router.get('/:id', getUserById);

//Create user by admin
router.post('/', createAdminUser);

//Login user
router.post('/login', loginUser);

//Register user
router.post('/register', registerNewUser);

//Get amount of all users
router.get('/get/count', getTotalAmountOfAllUsers);

//Delete user by id
router.delete('/:id', deleteUserById);

module.exports = router;
