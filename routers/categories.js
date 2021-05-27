const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
} = require('../controllers/CategoriesController');
const { authUser, isAdmin } = require('../helpers/basicAuth');

//Get all categories
router.get('/', getCategories);

//Get category by id
router.get('/:id', getCategoryById);

//Create category
router.post('/', [authUser, isAdmin], createCategory);

//Update category by id
router.put('/:id', [authUser, isAdmin], updateCategoryById);

//Delete category by id
router.delete('/:id', [authUser, isAdmin], deleteCategoryById);

module.exports = router;
