const {Router} = require('express');
const { UserController } = require('../controllers');
const { userAuthMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('', (req, res) => new UserController(req, res).getAll());
userRouter.get('/:id', (req, res) => new UserController(req, res).getById());
userRouter.put('/:id', (req, res) => new UserController(req, res).update());

userRouter.post('/auth', (req, res) => new UserController(req, res).authUser());
userRouter.post('/register', (req, res) => new UserController(req, res).register());

userRouter.get('/:user_id/carts', userAuthMiddleware, (req, res) => new UserController(req, res).getUserCart());
userRouter.post('/:user_id/carts', (req, res) => new UserController(req, res).addCart());

userRouter.put('/:user_id/carts/:cart_id', (req, res) => new UserController(req, res).updateCart());

userRouter.get('/:user_id/orders', userAuthMiddleware, (req, res) => new UserController(req, res).getUserOrders());

module.exports = userRouter;