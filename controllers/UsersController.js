const User = require('../models/user');
const { json } = require('body-parser');
const bcrypt = require('bcryptjs');
const { secret } = require('../config/config');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const mongoose = require('mongoose');

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
                message: 'user not found',
            });
        }

        res.status(200).send(user);
    }

    static async createAdminUser(req, res) {
        try {
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                passwordHash: bcrypt.hashSync(req.body.password, 10),
                phone: req.body.phone,
                role: req.body.role,
                street: req.body.street,
                lga: req.body.lga,
                direction: req.body.direction,
                city: req.body.city,
                state: req.body.state,
            });
            user = await user.save();

            if (!user)
                return res.status(500).send('The user can not be created');

            res.send(user);
        } catch (error) {
            res.send({ success: false, message: error.message });
            console.log(error);
        }
    }

    static async updateUserById(req, res) {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).send('invalid User id');
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                passwordHash: bcrypt.hashSync(req.body.password, 10),
                phone: req.body.phone,
                role: req.body.role,
                street: req.body.street,
                lga: req.body.lga,
                direction: req.body.direction,
                city: req.body.city,
                state: req.body.state,
            },
            { new: true }
        );

        if (!user) return res.status(500).send('The user can not be updated');

        res.send(user);
    }

    static async loginUser(req, res) {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res
                .status(400)
                .send({ success: false, message: 'user not found' });
        }

        if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    role: user.role,
                },
                secret,
                { expiresIn: '1d' }
            );

            return res.status(200).send({ user: user.email, token: token });
        } else {
            res.status(400).send({
                success: false,
                message: 'password is wrong!',
            });
        }

        return res.status(200).send(user);
    }

    static async registerNewUser(req, res) {
        const userExist = await User.findOne({ email: req.body.email });

        if (userExist) {
            return res
                .status(400)
                .send({ success: false, message: 'email already exist' });
        }

        try {
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                passwordHash: bcrypt.hashSync(req.body.password, 10),
                phone: req.body.phone,
                street: req.body.street,
                lga: req.body.lga,
                direction: req.body.direction,
                city: req.body.city,
                state: req.body.state,
            });
            user = await user.save();

            if (!user)
                return res.status(404).send('The user can not be created');

            res.send(user);
        } catch (error) {
            res.send({ success: false, message: error.message });
            console.log(error);
        }
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
                        message: 'category not found',
                    });
                }
            })
            .catch((e) => {
                return res.status(400).send({ success: false, error: e });
            });
    }
}

module.exports = UsersController;
