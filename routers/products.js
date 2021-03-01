const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    getAllProducts,
    getProductById,
    createProduct,
    addImageGalleryForProduct,
    updateProductById,
    deleteProductById,
    getFeaturedProducts,
    getTotalAmountOfAllProducts,
} = require('../controllers/ProductsController');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
};

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({ storage: storage });

//Get all products
router.get('/', getAllProducts);

//Get product by id
router.get('/:id', getProductById);

//Create product
router.post('/', uploadOptions.single('image'), createProduct);

//Add image gallery for a product
router.put(
    '/gallery-images/:id',
    uploadOptions.array('images', 10),
    addImageGalleryForProduct
);

//Update product by id
router.put('/:id', updateProductById);

//Delete product by id
router.delete('/:id', deleteProductById);

//Get featured products
router.get('/get/featured/:count', getFeaturedProducts);

//Get amount of all product
router.get('/get/count', getTotalAmountOfAllProducts);

module.exports = router;
