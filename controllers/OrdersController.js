const Order = require('../models/order');
const OrderItem = require('../models/order-Items');
const response = require('../helpers/response');
const { model } = require('mongoose');

class OrdersController {
    static async getListOfOrders(req, res) {
        try {
            const orderList = await Order.find()
                .populate('user', 'email')
                .sort({ dateOrdered: -1 });

            if (!orderList) {
                res.status(500).send(response('Order not found', {}, false));
            }

            res.send(
                response('Fetched total count of order successfully', orderList)
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getOrderById(req, res) {
        try {
            const order = await Order.findOne({
                orderNo: req.params.orderNo,
            })
                .populate('user', 'email')
                .populate({
                    path: 'orderItems',
                    model: 'OrderItem',
                    populate: {
                        path: 'product',
                        model: 'Product',
                        populate: { path: 'category', model: 'Category' },
                    },
                });
            if (!order) {
                res.status(500).send(response('Order not found', {}, false));
            }

            res.send(response('Fetched order successfully', order));
        } catch (error) {
            console.log(error.message);
        }
    }

    static async createOrder(req, res) {
        try {
            const orderItemsIds = Promise.all(
                req.body.orderItems.map(async (orderItem) => {
                    let newOrderItem = new OrderItem({
                        quantity: orderItem.quantity,
                        product: orderItem.product,
                    });

                    newOrderItem = await newOrderItem.save();

                    return newOrderItem._id;
                })
            );

            const orderItemsIdsResolved = await orderItemsIds;
            if (orderItemsIdsResolved.length === 0) {
                return res
                    .status(400)
                    .send(
                        response(
                            'An item is needed to create an order',
                            {},
                            false
                        )
                    );
            }

            const totalPrices = await Promise.all(
                orderItemsIdsResolved.map(async (orderItemId) => {
                    const orderItem = await OrderItem.findById(
                        orderItemId
                    ).populate({
                        path: 'product',
                        model: 'Product',
                        select: 'price',
                    });
                    const totalPrice =
                        orderItem.product.price * orderItem.quantity;
                    return totalPrice;
                })
            );

            const totalPrice = totalPrices.reduce((a, b) => a + b, 0);
            const orderStatus = 'processing';

            let order = new Order({
                orderItems: orderItemsIdsResolved,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                status: orderStatus,
                street: req.body.street,
                lga: req.body.lga,
                phone: req.body.phone,
                totalPrice: totalPrice,
                user: req.body.user,
            });
            order = await order.save();

            if (!order)
                return res
                    .status(404)
                    .send(response('The order can not be created', {}, false));

            return res.send(response('Order was created successfully', order));
        } catch (err) {
            console.log(err.message);
        }
    }

    static async updateOrderById(req, res) {
        try {
            const update = {
                ...req.body,
            };
            const filter = { _id: req.params.id };

            const order = await Order.findOneAndUpdate(filter, update, {
                new: true,
            });

            if (!order)
                return res
                    .status(404)
                    .send(response('The order can not be updated', {}, false));

            res.send(response('Order was updated successfully', order));
        } catch (error) {
            console.log(error.message);
        }
    }

    static deleteOrderById(req, res) {
        Order.findByIdAndDelete(req.params.id)
            .then(async (order) => {
                if (order) {
                    await order.orderItems.map(async (orderItem) => {
                        await OrderItem.findByIdAndRemove(orderItem);
                    });
                    return res
                        .status(200)
                        .send(response('Order was deleted successfully', {}));
                } else {
                    return res
                        .status(404)
                        .send(response('Order not found', {}, false));
                }
            })
            .catch((error) => {
                return res.status(400).send(response(error.message, {}, false));
            });
    }

    static async getTotalSales(req, res) {
        try {
            const filteredOrders = await Order.find({ status: 'delivered' });
            let totalOrders = 0;
            filteredOrders.map((order) => (totalOrders += order.totalPrice));

            if (!totalOrders) {
                return res
                    .status(400)
                    .send(
                        response(
                            'The order sales can not be generated',
                            {},
                            false
                        )
                    );
            }

            return res.send(
                response('Fetched total sales successfully', totalOrders)
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getTotalNumberOfAllOrders(req, res) {
        try {
            let orderCount = 0;
            const filteredOrder = await Order.find({ status: 'processing' });
            orderCount = filteredOrder.length;

            if (!orderCount) {
                return res
                    .status(500)
                    .send(response('Fetched orders count faild', {}, false));
            }

            res.send(response('Fetched orders count successfully', orderCount));
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getUserOrders(req, res) {
        try {
            const userOrderList = await Order.find({ user: req.user.userId })
                .populate({
                    path: 'orderItems',
                    model: 'OrderItem',
                    populate: {
                        path: 'product',
                        model: 'Product',
                        populate: { path: 'category', model: 'Category' },
                    },
                })
                .sort({ dateOdered: -1 });
            console.log(req.user.userId);

            if (!userOrderList) {
                res.status(500).send(
                    response('Fetch user order failed', {}, false)
                );
            }

            res.send(
                response('Fetched user order successfully', userOrderList)
            );
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = OrdersController;
