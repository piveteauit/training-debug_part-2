
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
            .catch(this.handleError.bind(this));
    }

    
    /**
     * 
     * @date 09/06/2023 - 11:00:58
     */
    getById() {
        this.model.getById(this.req.params.id)
            .then(([results]) => this.sendJson(results))
            .catch(this.handleError.bind(this));
    }

    create() {
        this.model.create(this.req.body)
            .then(([results]) => this.sendJson(results))
            .catch(this.handleError.bind(this));
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

    
    /**
     * 
     * @date 26/06/2023 - 22:05:38
     *
     * @param {*} error
     */
    handleError(error) {
        this.res
            .status(this._getErrorStatus(error?.message))
            .json({error: error?.message || "Unknown error"})
    }

    /**
     * 
     * @date 26/06/2023 - 22:09:49
     *
     * @param {string} [message=""]
     * @returns {(404 | 401 | 409 | 500)}
     */
    _getErrorStatus(message = "") {
        message = message.replace(/\s/ig,"").toUpperCase();

        if (message.includes("NOTFOUND")) return 404;
        if (message.includes("UNAUTHORIZED")) return 401;
        if (message.includes("INVALIDTOKEN")) return 401;
        if (message.includes("DUPLICATE")) return 409;

        return 500
    }
}

module.exports = BaseController;