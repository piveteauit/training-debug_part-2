const BaseModel = require("./BaseModel");

class MovieModel extends BaseModel {

    constructor() {
        super('movies')
    }
}

module.exports = MovieModel;