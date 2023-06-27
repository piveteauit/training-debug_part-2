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
        `SELECT c.id as cart_id, product_id, quantity FROM carts AS c WHERE user_id = ? AND c.id NOT IN (SELECT o.cart_id FROM orders AS o)`,
        [user_id]);
    }

    /**
     * 
     * @date 27/06/2023 - 10:46:03
     *
     * @param {*} user_id
     * @returns {*}
     */
    getUserOrders(user_id) {
        return this.db.query(
            `SELECT 
                c.id as cart_id, 
                c.product_id as product_id, 
                c.quantity as quantity, 
                os.label AS status 
            FROM carts as c 
            INNER JOIN orders as o 
                ON c.id = o.cart_id
            INNER JOIN status as os 
                ON os.id = o.status_id
            WHERE c.user_id = ?
            `,
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
            `INSERT INTO ${this.rawTable} (email, username, password, role_id) VALUES (?, ?, MD5(?), 2)`,
            Object.values(payload)
        )
    }
}

module.exports = UserModel;