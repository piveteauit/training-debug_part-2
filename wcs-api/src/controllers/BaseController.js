
/**
 * 
 * @date 09/06/2023 - 10:59:23
 *
 * @class BaseController
 * @typedef {BaseController}
 */
class BaseController {

    
    /**
     * 
     * @date 09/06/2023 - 10:59:28
     *
     * @type {Express.Request}
     */
    req;
    
    /**
     * 
     * @date 09/06/2023 - 10:59:51
     *
     * @type {Express.Response}
     */
    res;
    
    /**
     * 
     * @date 09/06/2023 - 11:00:02
     *
     * @type {Model}
     */
    model;

    
    /**
     * Creates an instance of BaseController.
     * @date 09/06/2023 - 11:00:19
     *
     * @constructor
     * @param {Express.Request} req
     * @param {Express.Response} res
     * @param {Model} Model
     */
    constructor(req, res, Model) {
        this.req = req;
        this.res = res;
        this.model = new Model(this.req.query.fields);
        this.model.fields = this.req.query.fields;
    }

    
    /**
     * 
     * @date 09/06/2023 - 11:00:51
     */
    getAll() {
        this.model.getAll()
            .then(([results]) => this.sendJson(results))
    }

    
    /**
     * 
     * @date 09/06/2023 - 11:00:58
     */
    getById() {
        this.model.getById(this.req.params.id)
            .then(([results]) => this.sendJson(results))
    }

    
    /**
     * 
     * @date 09/06/2023 - 11:01:01
     *
     * @param {*} data
     */
    sendJson(data) {
        this.res.status(200).json(data)
    }
}

module.exports = BaseController;