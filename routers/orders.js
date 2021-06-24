const express = require('express');
const router = express.Router();
const {
    getListOfOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
    getTotalSales,
    getTotalNumberOfAllOrders,
    getUserOrders,
} = require('../controllers/OrdersController');
const { authUser, isAdmin } = require('../helpers/jwt');

//Get list of orders
router.get('/', [authUser, isAdmin], getListOfOrders);

//Get order by id
router.get('/:id', [authUser], getOrderById);

//Create order
router.post('/', [authUser], createOrder);

//Update order by id
router.put('/:id', [authUser, isAdmin], updateOrderById);

//Delete order by id
router.delete('/:id', [authUser, isAdmin], deleteOrderById);

//Get total amount of all sales
router.get('/get/totalsales', [authUser, isAdmin], getTotalSales);

//Get number of all product
router.get('/get/count', [authUser, isAdmin], getTotalNumberOfAllOrders);

//Get user orders
router.get('/get/userorders', [authUser], getUserOrders);

module.exports = router;
