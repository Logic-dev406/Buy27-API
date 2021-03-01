const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');

class ProductController {
    static async getAllProducts(req, res) {
        let filter = {};
        if (req.query.categories) {
            filter = { category: req.query.categories.split(', ') };
        }
        const productList = await Product.find(filter);

        if (!productList) {
            res.status(500).json({ success: false });
        }
        res.send(productList);
    }

    static async getProductById(req, res) {
        const product = await Product.findById(req.params.id)
            .select('name image ')
            .populate({ path: 'category', model: 'Category' });

        if (!product) {
            return res.status(500).json({ success: false });
        }

        res.send(product);
    }

    static async createProduct(req, res) {
        const category = await Category.findById(req.body.category);

        if (!category) {
            return res.status(400).send('Invalid Category');
        }

        const file = req.file;
        if (!file) {
            return res
                .status(400)
                .send('an image is required to create a product');
        }

        const fileName = req.file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: `${basePath}${fileName}`,
            images: req.body.images,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            dateCreated: req.body.dateCreated,
            isFeatured: req.body.isFeatured,
        });

        product = await product.save();

        if (!product)
            return res.status(500).json({
                success: false,
                message: 'The product can not be created',
            });

        return res.send(product);
    }

    static async addImageGalleryForProduct(req, res) {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).send('Invalid Product id');
        }

        const files = req.files;
        let imagesPath = [];
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

        if (files) {
            files.map((file) => {
                imagesPath.push(`${basePath}${file.filename}`);
            });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                images: imagesPath,
            },
            { new: true }
        );

        if (!product)
            return res.status(500).json({
                success: false,
                message: 'The product can not be created',
            });

        return res.send(product);
    }

    static async updateProductById(req, res) {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).send('Invalid Product id');
        }
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(400).send('Invalid Category');
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                richDescription: req.body.richDescription,
                image: `${basePath}${fileName}`,
                images: req.body.images,
                price: req.body.price,
                category: req.body.category,
                countInStock: req.body.countInStock,
                rating: req.body.rating,
                numReviews: req.body.numReviews,
                dateCreated: req.body.dateCreated,
                isFeatured: req.body.isFeatured,
            },
            { new: true }
        );

        if (!product)
            return res.status(500).send('The product can not be updated');

        res.send(product);
    }

    static deleteProductById(req, res) {
        Product.findByIdAndDelete(req.params.id)
            .then((product) => {
                if (product) {
                    return res.status(200).json({
                        success: true,
                        message: 'The product as been deleted',
                    });
                } else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'Product not found' });
                }
            })
            .catch((e) => {
                return res.status(400).send({ success: false, error: e });
            });
    }

    static async getFeaturedProducts(req, res) {
        const count = req.params.count ? req.params.count : 0;
        const product = await Product.find({ isFeatured: true }).limit(+count);

        if (!product) {
            return res.status(500).json({ success: false });
        }

        res.send(product);
    }

    static async getTotalAmountOfAllProducts(req, res) {
        const productCount = await Product.countDocuments((count) => count);

        if (!productCount) {
            return res.status(500).json({ success: false });
        }

        res.send({
            count: productCount,
        });
    }
}

module.exports = ProductController;
