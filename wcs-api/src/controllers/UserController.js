const { UserModel } = require("../models");
const BaseController = require("./BaseController");


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

    
}

module.exports = UserController;