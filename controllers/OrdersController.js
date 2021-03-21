const Order = require('../models/order');
const OrderItem = require('../models/order-Items');

class OrdersController {
    static async getListOfOrders(req, res) {
        const orderList = await Order.find()
            .populate('user', 'name')
            .sort({ dateOdered: -1 });

        if (!orderList) {
            res.status(500).json({ success: false });
        }

        res.send(orderList);
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
            res.status(500).json({ success: false });
        }

        res.send(order);
    }

    static async createOrder(req, res) {
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

        const totalPrices = await Promise.all(
            orderItemsIdsResolved.map(async (orderItemId) => {
                const orderItem = await OrderItem.findById(
                    orderItemId
                ).populate({
                    path: 'orderitem',
                    model: 'OrderItem',
                    populate: {
                        path: 'product',
                        model: 'Product',
                        select: 'price',
                    },
                });
                const totalPrice = orderItem.product.price * orderItem.quantity;
                return totalPrice;
            })
        );

        const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

        let order = new Order({
            orderItems: orderItemsIdsResolved,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: totalPrice,
            user: req.body.user,
        });
        order = await order.save();

        if (!order) return res.status(404).send('The order can not be created');

        return res.send(order);
    }

    static async updateOrderById(req, res) {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            { new: true }
        );

        if (!order) return res.status(404).send('The order can not be updated');

        res.send(order);
    }

    static deleteOrderById(req, res) {
        Order.findByIdAndDelete(req.params.id)
            .then(async (order) => {
                if (order) {
                    await order.orderItems.map(async (orderItem) => {
                        await OrderItem.findByIdAndRemove(orderItem);
                    });
                    return res.status(200).json({
                        success: true,
                        message: 'The order is deleted',
                    });
                } else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'order not found' });
                }
            })
            .catch((e) => {
                return res.status(400).send({ success: false, error: e });
            });
    }

    static async getTotalSales(req, res) {
        const totalsales = await Order.aggregate([
            { $group: { _id: null, totalsales: { $sum: '$totalPrice' } } },
        ]);

        if (!totalsales) {
            return res.status(400).send('The order sales can not be generated');
        }

        return res.send({ totalsales: totalsales.pop().totalsales });
    }

    static async getTotalNumberOfAllOrders(req, res) {
        const orderCount = await Order.countDocuments((count) => count);

        if (!orderCount) {
            return res.status(500).json({ success: false });
        }

        res.send({
            count: orderCount,
        });
    }

    static async getUserOrders(req, res) {
        const userOrderList = await Order.find({ user: req.params.userid })
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

        if (!userOrderList) {
            res.status(500).json({ success: false });
        }

        res.send(userOrderList);
    }
}

module.exports = OrdersController;
