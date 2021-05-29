const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');
const response = require('../helpers/response');

class ProductController {
    static async searchForProduct(req, res) {
        const searchInput = req.query.name;

        const search = await Product.find({
            name: { $regex: searchInput, $options: '$i' },
        });

        if (!search) {
            res.status(500).send(response('Product not found', {}, false));
        }
        res.send(response('Searched result', search));
    }

    static async getAllProducts(req, res) {
        let filter = {};
        if (req.query.categories) {
            filter = { category: req.query.categories.split(', ') };
        }
        const productList = await Product.find(filter);

        if (!productList) {
            res.status(500).send(response('No product was found', {}, false));
        }
        res.send(response('Fetched products successfully', productList));
    }

    static async getProductById(req, res) {
        const product = await Product.findOne({ slug: req.params.slug })
            .select(
                'name image images price description category richDescription countInStock slug'
            )
            .populate({ path: 'category', model: 'Category' });

        if (!product) {
            return res
                .status(500)
                .send(response('Product not found', {}, false));
        }

        res.send(response('Fetched product successfully ', product));
    }

    static async createProduct(req, res) {
        const category = await Category.findById(req.body.category);

        if (!category) {
            return res
                .status(400)
                .send(response('Invalid Category', {}, false));
        }

        const file = req.file;
        if (!file) {
            return res
                .status(400)
                .send(
                    response(
                        'an image is required to create a product',
                        {},
                        false
                    )
                );
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
            dateCreated: req.body.dateCreated,
            isFeatured: req.body.isFeatured,
        });

        product = await product.save();

        if (!product)
            return res
                .status(500)
                .send(response('The product can not be created', {}, false));

        return res.send(response('Product was created successfully ', product));
    }

    static async addImageGalleryForProduct(req, res) {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).send(response('Invalid Product id', {}, false));
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
            return res
                .status(500)
                .send(response('The product can not be created', {}, false));

        return res.send(response('Image gallery successfully added', product));
    }

    static async updateProductById(req, res) {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).send(response('Invalid Product id', {}, false));
        }
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res
                .status(400)
                .send(response('Invalid Category', {}, false));
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
                dateCreated: req.body.dateCreated,
                isFeatured: req.body.isFeatured,
            },
            { new: true }
        );

        if (!product)
            return res
                .status(500)
                .send(response('The product can not be updated', {}, false));

        res.send(response('Product updated successfully', product));
    }

    static deleteProductById(req, res) {
        Product.findByIdAndDelete(req.params.id)
            .then((product) => {
                if (product) {
                    return res
                        .status(200)
                        .send(response('The product as been deleted', {}));
                } else {
                    return res
                        .status(404)
                        .send(response('Product not found', {}, false));
                }
            })
            .catch((error) => {
                return res.status(400).send(response(error.message, {}, false));
            });
    }

    static async getFeaturedProducts(req, res) {
        const count = req.params.count ? req.params.count : 0;
        const product = await Product.find({ isFeatured: true }).limit(+count);

        if (!product) {
            return res
                .status(500)
                .send(response('Featured product not found', {}, false));
        }

        res.send(response('Fetched featured product successfully', product));
    }

    static async getTotalAmountOfAllProducts(req, res) {
        const productCount = await Product.countDocuments((count) => count);

        if (!productCount) {
            return res
                .status(500)
                .send(response('Product count not found', {}, false));
        }

        res.send(
            response(
                'Fetched total count of all product successfully',
                productCount
            )
        );
    }
}

module.exports = ProductController;
