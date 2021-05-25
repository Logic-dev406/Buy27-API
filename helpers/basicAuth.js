const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Unauthorized');
    } else {
        const tokenBody = token.slice(7);
        jwt.verify(tokenBody, secret, (error, decode) => {
            if (error) {
                console.log('Jwt Error:', $(error));
                return res.status(401).send('Error: Access Denied');
            }
            next();
        });
    }
};
