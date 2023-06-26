const { FieldMapping } = require("../class");
const BaseModel = require("./BaseModel");


/**
 * 
 * @date 09/06/2023 - 11:03:22
 *
 * @class UserModel
 * @typedef {UserModel}
 * @extends {BaseModel}
 */
class UserModel extends BaseModel {

    
    /**
     * 
     * @date 09/06/2023 - 11:03:26
     *
     * @type {*}
     */
    fieldsMapping;

    
    /**
     * Creates an instance of UserModel.
     * @date 09/06/2023 - 11:03:30
     *
     * @constructor
     */
    constructor() {
        super('users u');

        this.fieldsMapping = {
            "id": [`u.id`],
            "email": [`u.email`],
            "username": [`u.username`],
            "role": [
                `r.label as role`,
                new FieldMapping('roles', 'r', 'r.id = u.role_id')
            ],
        }
    }

    /**
     * 
     * @date 26/06/2023 - 20:32:48
     *
     * @param {*} user_id
     * @returns {*}
     */
    getUserCart(user_id) {
        return this.db.query(
        `SELECT product_id, quantity FROM carts WHERE user_id = ?`,
        [user_id]);
    }

    /**
     * 
     * @date 26/06/2023 - 20:32:56
     *
     * @param {{ email: any; password: any; }} {email, password}
     * @returns {*}
     */
    authUser({email, password}) {
        return this.db.query(
            `SELECT ${this._getFields()} FROM ${this.table} ${this._getJoins()} WHERE email = ? AND password = MD5(?)`,
            [email, password]);
    }

    /**
     * 
     * @date 26/06/2023 - 21:28:48
     *
     * @param {*} payload
     * @returns {*}
     */
    create(payload) {
        return this.db.query(
            `INSERT INTO ${this.rawTable} (email, username, password, role_id) VALUES (?, ?, MD5(?), 1)`,
            Object.values(payload)
        )
    }
}

module.exports = UserModel;