const Category = require('../models/category');

class CategoriesController {
    static async getCategories(req, res) {
        const categoryList = await Category.find();

        if (!categoryList) {
            res.status(500).json({ success: false });
        }

        res.status(200).send(categoryList);
    }

    static async getCategoryById(req, res) {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(500).json({
                success: false,
                message: 'Category with the given ID was not found',
            });
        }

        res.status(200).send(category);
    }

    static async createCategory(req, res) {
        let category = new Category({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        });
        category = await category.save();

        if (!category)
            return res.status(404).send('The category can not be created');

        res.send(category);
    }

    static async updateCategoryById(req, res) {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                icon: req.body.icon,
                color: req.body.color,
            },
            { new: true }
        );

        if (!category)
            return res.status(404).send('The category can not be updated');

        res.send(category);
    }

    static deleteCategoryById(req, res) {
        Category.findByIdAndDelete(req.params.id)
            .then((category) => {
                if (category) {
                    return res.status(200).json({
                        success: true,
                        message: 'The category is deleted',
                    });
                } else {
                    return res.status(404).json({
                        success: false,
                        message: 'Category not found',
                    });
                }
            })
            .catch((e) => {
                return res.status(400).send({ success: false, error: e });
            });
    }
}

module.exports = CategoriesController;
