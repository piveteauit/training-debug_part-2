const { MovieModel } = require("../models");
const BaseController = require("./BaseController");

class MovieController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new MovieModel();
    }

}

module.exports = MovieController;