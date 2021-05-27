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
    searchForProduct,
} = require('../controllers/ProductsController');
const { authUser, isAdmin, isBasicUser } = require('../helpers/basicAuth');

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

//Search for product
router.get('/search', searchForProduct);

//Get all products
router.get('/', getAllProducts);

//Get product by id
router.get('/:slug', getProductById);

//Create product
router.post(
    '/',
    [authUser, isAdmin],
    uploadOptions.single('image'),
    createProduct
);

//Add image gallery for a product
router.put(
    '/gallery-images/:id',
    [authUser, isAdmin],
    uploadOptions.array('images', 10),
    addImageGalleryForProduct
);

//Update product by id
router.put('/:id', [authUser, isAdmin], updateProductById);

//Delete product by id
router.delete('/:id', [authUser, isAdmin], deleteProductById);

//Get featured products
router.get('/get/featured/:count', getFeaturedProducts);

//Get amount of all product
router.get('/get/count', [authUser, isAdmin], getTotalAmountOfAllProducts);

module.exports = router;
