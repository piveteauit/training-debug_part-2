const {Router} = require('express');
const { MovieController } = require('../controllers');

const movieRouter = Router();

movieRouter.get('', (req, res) => new MovieController(req, res).getAll());
movieRouter.get('/:id', (req, res) => new MovieController(req, res).getById());


module.exports = movieRouter;