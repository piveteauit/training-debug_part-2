const {Router} = require('express');
const { CartController } = require('../controllers');

const cartRouter = Router();

cartRouter.get('', (req, res) => new CartController(req, res).getAll());
cartRouter.get('/:id', (req, res) => new CartController(req, res).getById());


module.exports = cartRouter;