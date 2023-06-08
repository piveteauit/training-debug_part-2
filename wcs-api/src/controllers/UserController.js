const { UserModel } = require("../models");
const BaseController = require("./BaseController");

class UserController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new UserModel();
    }

    
}

module.exports = UserController;