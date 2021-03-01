const expressjwt = require('express-jwt');
const { secret } = require('../config/config');

function authJwt() {
    return expressjwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked,
    }).unless({
        path: [
            { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            '/api/users/login',
            '/api/users/register',
        ],
    });
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
        done(null, true);
    }

    done();
}

module.exports = authJwt;
