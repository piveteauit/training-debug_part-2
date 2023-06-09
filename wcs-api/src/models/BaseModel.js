const {db} = require("../config");


/**
 * 
 * @date 09/06/2023 - 10:56:29
 *
 * @class BaseModel
 * @typedef {BaseModel}
 */
class BaseModel {

    
    /**
     * 
     * @date 09/06/2023 - 10:56:38
     *
     * @type {*}
     */
    table;
    
    /**
     * 
     * @date 09/06/2023 - 10:56:42
     *
     * @type {*}
     */
    alias;
    
    /**
     * 
     * @date 09/06/2023 - 10:56:45
     *
     * @type {*}
     */
    db;

    
    /**
     * 
     * @date 09/06/2023 - 10:56:50
     *
     * @type {{}}
     */
    fields = [];
    
    /**
     * 
     * @date 09/06/2023 - 10:56:53
     *
     * @type {{}}
     */
    joins = [];

    
    /**
     * Creates an instance of BaseModel.
     * @date 09/06/2023 - 10:57:03
     *
     * @constructor
     * @param {*} table
     */
    constructor(table) {
        this.table = table;
        this.alias = table.split(' ')?.[1] || table;
        this.db = db;
    }


    
    /**
     * 
     * @date 09/06/2023 - 10:57:07
     *
     * @returns {Promise<*>}
     */
    getAll() {
        return this.db
            .query(`SELECT ${this._getFields()} FROM ${this.table} ${this._getJoins()}`)
    }

    
    /**
     * 
     * @date 09/06/2023 - 10:57:30
     *
     * @param {string|number} id
     * @returns {Promise<*>}
     */
    getById(id) {
        return this.db
            .query(`SELECT ${this._getFields()} FROM ${this.table} ${this._getJoins()} WHERE ${this.alias}.id = ?`, [id])
    }

    
    /**
     * 
     * @date 09/06/2023 - 10:58:03
     *
     * @returns {string[]}
     */
    _getFields() {
        return this.fields
            ?.filter((field) => this.fieldsMapping[field]?.[0])
            ?.map((field) => this.fieldsMapping[field][0]) 
            || "*"
    }

    
    /**
     * 
     * @date 09/06/2023 - 10:58:27
     *
     * @returns {string[]}
     */
    _getJoins() {
        return this.fields
            ?.filter((field) => this.fieldsMapping[field]?.[1])
            ?.map((field) => this.fieldsMapping[field]?.[1].query)
            || "";
    }

}

module.exports = BaseModel;