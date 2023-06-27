const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config')

/**
 * 
 * @date 26/06/2023 - 20:32:11
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {*}
 */
function userAuthMiddleware(req, res, next) {
    if (!req.cookies.access_token) return res.sendStatus(401);
    
    req.user = jwt.verify(req.cookies.access_token, jwtSecret);
    
    return (!req.user)
        ? res.sendStatus(401)
        : next();
}

module.exports = {
    userAuthMiddleware,
}