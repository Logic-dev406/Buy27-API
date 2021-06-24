const Order = require('../models/order');
const OrderItem = require('../models/order-Items');
const response = require('../helpers/response');
const { model } = require('mongoose');

class OrdersController {
    static async getListOfOrders(req, res) {
        const orderList = await Order.find()
            .populate('user', 'name')
            .sort({ dateOdered: -1 });

        if (!orderList) {
            res.status(500).send(response('Order not found', {}, false));
        }

        res.send(
            response('Fetched total count of order successfully', orderList)
        );
    }

    static async getOrderById(req, res) {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name')
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
            console.log(orderItemsIdsResolved);

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

            let order = new Order({
                orderItems: orderItemsIdsResolved,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
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
        const totalsales = await Order.aggregate([
            { $group: { _id: null, totalsales: { $sum: '$totalPrice' } } },
        ]);

        if (!totalsales) {
            return res
                .status(400)
                .send(
                    response('The order sales can not be generated', {}, false)
                );
        }

        return res.send(
            response(
                'Fetched total sales successfully',
                totalsales.pop().totalsales
            )
        );
    }

    static async getTotalNumberOfAllOrders(req, res) {
        const orderCount = await Order.countDocuments((count) => count);

        if (!orderCount) {
            return res
                .status(500)
                .send(response('Fetch total count of orders faild', {}, false));
        }

        res.send(
            response('Fetched total count of order successfully', orderCount)
        );
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
