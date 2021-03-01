const User = require('../models/user');
const { json } = require('body-parser');
const bcrypt = require('bcryptjs');
const { secret } = require('../config/config');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

class UsersController {
    static async getListOfAllUsers(req, res) {
        const userList = await User.find().select('-passwordHash');

        if (!userList) {
            res.status(500), json({ success: false });
        }

        res.send(userList);
    }

    static async getUserById(req, res) {
        const user = await User.findById(req.params.id).select('-passwordHash');

        if (!user) {
            return res.status(500).json({
                success: false,
                message: 'Category with the given ID was not found',
            });
        }

        res.status(200).send(user);
    }

    static async createAdminUser(req, res) {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        });
        user = await user.save();

        if (!user) return res.status(404).send('The user can not be created');

        res.send(user);
    }

    static async loginUser(req, res) {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).send('User not found');
        }

        if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    isAdmin: user.isAdmin,
                },
                secret,
                { expiresIn: '1d' }
            );

            return res.status(200).send({ user: user.email, token: token });
        } else {
            res.status(400).send('password is wrong!');
        }

        return res.status(200).send(user);
    }

    static async registerNewUser(req, res) {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        });
        user = await user.save();

        if (!user) return res.status(404).send('The user can not be created');

        res.send(user);
    }

    static async getTotalAmountOfAllUsers(req, res) {
        const userCount = await User.countDocuments((count) => count);

        if (!userCount) {
            return res.status(500).json({ success: false });
        }

        res.send({
            count: userCount,
        });
    }

    static deleteUserById(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then((user) => {
                if (user) {
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

module.exports = UsersController;
