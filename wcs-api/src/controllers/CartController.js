const { CartModel } = require("../models");
const BaseController = require("./BaseController");


/**
 * 
 * @date 09/06/2023 - 11:01:57
 *
 * @class CartController
 * @typedef {CartController}
 * @extends {BaseController}
 */
class CartController extends BaseController {

    
    /**
     * Creates an instance of CartController.
     * @date 09/06/2023 - 11:02:01
     *
     * @constructor
     * @param {*} req
     * @param {*} res
     */
    constructor(req, res) {
        super(req, res, CartModel);
    }

}

module.exports = CartController;