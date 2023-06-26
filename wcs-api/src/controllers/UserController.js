const jwt = require('jsonwebtoken');
const { UserModel } = require("../models");
const BaseController = require("./BaseController");
const { jwtSecret } = require('../config');


/**
 * 
 * @date 09/06/2023 - 11:01:25
 *
 * @class UserController
 * @typedef {UserController}
 * @extends {BaseController}
 */
class UserController extends BaseController {

    
    /**
     * Creates an instance of UserController.
     * @date 09/06/2023 - 11:01:32
     *
     * @constructor
     * @param {*} req
     * @param {*} res
     */
    constructor(req, res) {
        super(req, res, UserModel);
    }

    getUserCart() {
        this.model.getUserCart(this.req.params.user_id)
            .then(([results]) => this.sendJson(results))
    }

    authUser() {
        this.model.authUser(this.req.body)
            .then(([results]) => results[0])
            .then((user) => {
                this.res.cookie("access_token", jwt.sign(user, jwtSecret, {expiresIn: "1d"}))
                this.sendJson(user)
            })
    }

    
}

module.exports = UserController;