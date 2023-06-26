const {Router} = require('express');
const { UserController } = require('../controllers');
const { userAuthMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('', (req, res) => new UserController(req, res).getAll());
userRouter.get('/:id', (req, res) => new UserController(req, res).getById());
userRouter.get('/:user_id/carts', userAuthMiddleware, (req, res) => new UserController(req, res).getUserCart());

userRouter.post('/auth', (req, res) => new UserController(req, res).authUser());


module.exports = userRouter;