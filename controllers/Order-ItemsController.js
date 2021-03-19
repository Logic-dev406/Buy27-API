const OrderItem = require('../models/order-Items');
const Product = require('../models/product');

class OrderItemsController {
    static async getListOfOrderItems(req, res) {
        const orderItemsList = await OrderItem.find();

        if (!orderItemsList) {
            res.status(500).json({ success: false });
        }

        res.send(orderItemsList);
    }

    static async createOrderItem(req, res) {
        const product = await Product.findById(req.body.product);

        if (!product) {
            return res.status(400).send('Invalid Product');
        }

        let orderItem = new OrderItem({
            quantity: req.body.quantity,
            product: req.body.product,
        });
        orderItem = await orderItem.save();

        if (!orderItem)
            return res.status(404).send('The category can not be created');

        res.send(orderItem);
    }
}

module.exports = OrderItemsController;
