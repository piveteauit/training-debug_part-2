const { ProductModel } = require("../models");
const BaseController = require("./BaseController");


/**
 * 
 * @date 09/06/2023 - 11:01:44
 *
 * @class ProductController
 * @typedef {ProductController}
 * @extends {BaseController}
 */
class ProductController extends BaseController {

    
    /**
     * Creates an instance of ProductController.
     * @date 09/06/2023 - 11:01:48
     *
     * @constructor
     * @param {*} req
     * @param {*} res
     */
    constructor(req, res) {
        super(req, res, ProductModel);
    }

}

module.exports = ProductController;