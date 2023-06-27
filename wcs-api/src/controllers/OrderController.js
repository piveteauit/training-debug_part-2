const { OrderModel } = require("../models");
const BaseController = require("./BaseController");



class OrderController extends BaseController {

    /**
     * Creates an instance of OrderController.
     * @date 27/06/2023 - 13:29:13
     *
     * @constructor
     * @param {*} req
     * @param {*} res
     */
    constructor(req, res) {
        super(req, res, OrderModel);
    }

}

module.exports = OrderController;