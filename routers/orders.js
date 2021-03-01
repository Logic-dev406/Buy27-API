const express = require('express');
const router = express.Router();
const {
    getListOfOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
    getTotalSales,
    getTotalNumberOfAllProducts,
    getUserOrders,
} = require('../controllers/OrdersController');

//Get list of orders
router.get('/', getListOfOrders);

//Get order by id
router.get('/:id', getOrderById);

//Create order
router.post('/', createOrder);

//Update order by id
router.put('/:id', updateOrderById);

//Delete order by id
router.delete('/:id', deleteOrderById);

//Get total amount of all sales
router.get('/get/totalsales', getTotalSales);

//Get number of all product
router.get('/get/count', getTotalNumberOfAllProducts);

//Get user orders
router.get('/get/userorders/:userid', getUserOrders);

module.exports = router;
