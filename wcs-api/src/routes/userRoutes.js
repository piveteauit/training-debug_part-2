const {Router} = require('express');
const { UserController } = require('../controllers');

const userRouter = Router();

userRouter.get('', (req, res) => new UserController(req, res).getAll());
userRouter.get('/:id', (req, res) => new UserController(req, res).getById());
userRouter.get('/:user_id/carts', (req, res) => new UserController(req, res).getUserCart());

module.exports = userRouter;