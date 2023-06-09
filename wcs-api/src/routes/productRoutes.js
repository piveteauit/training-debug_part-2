const {Router} = require('express');
const { ProductController } = require('../controllers');

const productRouter = Router();

productRouter.get('', (req, res) => new ProductController(req, res).getAll());
productRouter.get('/:id', (req, res) => new ProductController(req, res).getById());


module.exports = productRouter;