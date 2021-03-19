const express = require('express');
const router = express.Router();

const {
    getListOfOrderItems,
    createOrderItem,
} = require('../controllers/Order-ItemsController');

//Get list of orderitems
router.get('/', getListOfOrderItems);

//Create orderitem
router.post('/', createOrderItem);

module.exports = router;
