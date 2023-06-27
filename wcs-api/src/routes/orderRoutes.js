const {Router} = require('express');
const { OrderController } = require('../controllers');
const orderRouter = Router();

orderRouter.post('', (req, res) => new OrderController(req, res).create());

module.exports = orderRouter;